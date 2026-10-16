import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Gayashri Wanni Arachchi | Fashion Designer',
  description: 'The portfolio of Gayashri Wanni Arachchi — fashion design, lookbooks, creative direction, fashion CAD and technical development.',
  openGraph: {
    title: 'Gayashri Wanni Arachchi — Fashion Designer',
    description: 'Beyond the sketch. Into the story.',
    images: ['/images/welcome-web.png']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
