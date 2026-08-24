import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SDD Repository Dashboard',
  description:
    'Repository-level SDD operations dashboard with separate New Spec and Implement stages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
