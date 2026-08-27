import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Free Fire Sensitivity Generator',
  description: 'Generador profesional de sensibilidades para Free Fire con preview en tiempo real',
  icons: {
    icon: '🎮',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
