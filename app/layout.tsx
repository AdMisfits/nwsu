import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { TrainingProvider } from '@/context/TrainingContext';

export const metadata: Metadata = {
  title: 'NWS University | Water Specialist Training',
  description: 'Complete your Water Specialist training and earn your NWS certification',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <TrainingProvider>{children}</TrainingProvider>
      </body>
    </html>
  );
}
