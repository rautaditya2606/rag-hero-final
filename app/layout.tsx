import type {Metadata} from 'next';
import { Outfit, Instrument_Serif } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RAG Studio | Enterprise RAG Platform',
  description: 'Build production-ready AI assistants on your private data with a scalable RAG pipeline.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable}`}>
      <body suppressHydrationWarning className="bg-[#FCFCFC] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
