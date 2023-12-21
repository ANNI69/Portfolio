// Import necessary modules
import Head from 'next/head';
import { Inter } from 'next/font/google';

// Create an instance of the Inter font
const inter = Inter({ subsets: ['latin'] });

// Define metadata
export const metadata = {
  title: 'Aniruddh Nagare',
  description: 'Code, Create, and Cut.',
};

// Define the RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpg" type="image/jpg" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
