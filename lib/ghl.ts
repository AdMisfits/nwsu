const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

function getHeaders(): Record<string, string> {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) throw new Error('GHL_API_KEY is not configured');
  return {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    Version: GHL_API_VERSION,
  };
}

function getLocationId(): string {
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) throw new Error('GHL_LOCATION_ID is not configured');
  return locationId;
}

// Look up a contact by email
async function findContactByEmail(email: string): Promise<{ id: string } | null> {
  try {
    const res = await fetch(
      `${GHL_API_BASE}/contacts/search/duplicate?locationId=${getLocationId()}&email=${encodeURIComponent(email)}`,
      { method: 'GET', headers: getHeaders() }
    );

    if (!res.ok) {
      console.error('GHL contact lookup failed:', res.status, await res.text());
      return null;
    }

    const data = await res.json();
    const contact = data.contact;
    return contact ? { id: contact.id } : null;
  } catch (error) {
    console.error('GHL contact lookup error:', error);
    return null;
  }
}

// Create a new contact in GHL
async function createContact(email: string): Promise<{ id: string } | null> {
  try {
    const res = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        locationId: getLocationId(),
        email,
        source: 'NWSU Training',
      }),
    });

    if (!res.ok) {
      console.error('GHL create contact failed:', res.status, await res.text());
      return null;
    }

    const data = await res.json();
    return data.contact ? { id: data.contact.id } : null;
  } catch (error) {
    console.error('GHL create contact error:', error);
    return null;
  }
}

async function findOrCreateContact(email: string): Promise<{ id: string } | null> {
  const existing = await findContactByEmail(email);
  if (existing) return existing;
  return createContact(email);
}

// Get all custom fields for the location
async function getCustomFields(): Promise<Array<{ id: string; name: string; fieldKey: string }>> {
  try {
    const res = await fetch(
      `${GHL_API_BASE}/locations/${getLocationId()}/customFields`,
      { method: 'GET', headers: getHeaders() }
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.customFields || [];
  } catch (error) {
    console.error('GHL get custom fields error:', error);
    return [];
  }
}

// Create a custom field
async function createCustomField(name: string, fieldKey: string): Promise<string | null> {
  try {
    const res = await fetch(
      `${GHL_API_BASE}/locations/${getLocationId()}/customFields`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ name, dataType: 'TEXT', fieldKey }),
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.customField?.id || null;
  } catch (error) {
    console.error('GHL create custom field error:', error);
    return null;
  }
}

// NWSU custom field definitions
const NWSU_FIELDS: Record<string, string> = {
  nwsu_training_completed: 'NWSU - Training Completed',
  nwsu_final_exam_score: 'NWSU - Final Exam Score',
  nwsu_certification_date: 'NWSU - Certification Date',
  nwsu_chapters_completed: 'NWSU - Chapters Completed',
  nwsu_location: 'NWSU - Location',
};

// Ensure custom fields exist
async function ensureNWSUCustomFields(
  fieldKeys: string[]
): Promise<Record<string, string>> {
  const existingFields = await getCustomFields();
  const fieldMap: Record<string, string> = {};

  for (const key of fieldKeys) {
    const displayName = NWSU_FIELDS[key];
    if (!displayName) continue;

    const existing = existingFields.find(
      (f) => f.fieldKey === `contact.${key}` || f.name === displayName
    );

    if (existing) {
      fieldMap[key] = existing.id;
    } else {
      const newFieldId = await createCustomField(displayName, key);
      if (newFieldId) {
        fieldMap[key] = newFieldId;
      }
    }
  }

  return fieldMap;
}

// Update a contact's custom fields
async function updateContactCustomFields(
  contactId: string,
  customFields: Array<{ id: string; field_value: string }>
): Promise<boolean> {
  try {
    const res = await fetch(`${GHL_API_BASE}/contacts/${contactId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ customFields }),
    });

    if (!res.ok) {
      console.error('GHL update contact failed:', res.status, await res.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('GHL update contact error:', error);
    return false;
  }
}

// Push certification data to GHL
export async function pushCertificationToGHL(
  email: string,
  data: {
    examScore: number;
    chaptersCompleted: number;
    totalChapters: number;
    city?: string;
    state?: string;
  }
): Promise<boolean> {
  if (!process.env.GHL_API_KEY || !process.env.GHL_LOCATION_ID) {
    console.warn('GHL not configured, skipping certification push');
    return false;
  }

  const contact = await findOrCreateContact(email);
  if (!contact) {
    console.error(`GHL: Could not find or create contact for ${email}`);
    return false;
  }

  const fieldValues: Record<string, string> = {
    nwsu_training_completed: 'Yes',
    nwsu_final_exam_score: `${data.examScore}%`,
    nwsu_certification_date: new Date().toISOString(),
    nwsu_chapters_completed: `${data.chaptersCompleted} of ${data.totalChapters}`,
  };

  if (data.city && data.state) {
    fieldValues.nwsu_location = `${data.city}, ${data.state}`;
  }

  const fieldKeys = Object.keys(fieldValues);
  const fieldMap = await ensureNWSUCustomFields(fieldKeys);

  const customFields = fieldKeys
    .filter((key) => fieldMap[key])
    .map((key) => ({
      id: fieldMap[key],
      field_value: fieldValues[key],
    }));

  if (customFields.length === 0) {
    console.error('GHL: No custom fields mapped');
    return false;
  }

  return updateContactCustomFields(contact.id, customFields);
}
