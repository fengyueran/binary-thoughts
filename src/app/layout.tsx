import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '../components/Navigation';
import StyledComponentsRegistry from './lib/registry';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: "yueran's Universe",
  description: '探索前沿技术博客，欣赏yueran feng的作品'
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Navigation />
          <main style={{ paddingTop: '4rem' }}>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
