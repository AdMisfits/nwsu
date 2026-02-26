export interface EncryptedCredentials {
  encryptedData: string;
  iv: string;
}

// AES-256-GCM encryption for credentials
// This runs on the server side only

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const TAG_LENGTH = 16;

export async function encryptCredentials(
  data: Record<string, string>
): Promise<EncryptedCredentials> {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error('ENCRYPTION_KEY is not configured');
  }

  const crypto = await import('crypto');

  const keyBuffer = Buffer.from(encryptionKey, 'hex');
  if (keyBuffer.length !== 32) {
    throw new Error('ENCRYPTION_KEY must be 32 bytes (64 hex characters)');
  }

  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, keyBuffer, iv);

  const jsonData = JSON.stringify(data);
  let encrypted = cipher.update(jsonData, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();
  const encryptedWithTag = encrypted + authTag.toString('hex');

  return {
    encryptedData: encryptedWithTag,
    iv: iv.toString('hex'),
  };
}

export async function decryptCredentials(
  encryptedCredentials: EncryptedCredentials
): Promise<Record<string, string>> {
  const encryptionKey = process.env.ENCRYPTION_KEY;
  if (!encryptionKey) {
    throw new Error('ENCRYPTION_KEY is not configured');
  }

  const crypto = await import('crypto');

  const keyBuffer = Buffer.from(encryptionKey, 'hex');
  const iv = Buffer.from(encryptedCredentials.iv, 'hex');

  const encryptedData = encryptedCredentials.encryptedData;
  const tagStart = encryptedData.length - TAG_LENGTH * 2;
  const encrypted = encryptedData.slice(0, tagStart);
  const authTag = Buffer.from(encryptedData.slice(tagStart), 'hex');

  const decipher = crypto.createDecipheriv(ALGORITHM, keyBuffer, iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
}
