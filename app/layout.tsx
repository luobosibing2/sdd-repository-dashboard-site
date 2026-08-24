import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SDD Repository Dashboard',
  description:
    'Repository-level SDD operations dashboard with separate New Spec and Implement stages.',
  metadataBase: new URL(
    'https://sdd-repository-dashboard.zhangyc970514.chatgpt.site',
  ),
  openGraph: {
    title: 'SDD Repository Dashboard',
    description:
      'Repository-level SDD operations dashboard with separate New Spec and Implement stages.',
    url: 'https://sdd-repository-dashboard.zhangyc970514.chatgpt.site',
    siteName: 'SDD Repository Dashboard',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SDD Repository Dashboard',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDD Repository Dashboard',
    description:
      'Repository-level SDD operations dashboard with separate New Spec and Implement stages.',
    images: ['/og.png'],
  },
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
