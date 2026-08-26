import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SDD 个人运行观察',
  description:
    '个人 Session 使用情况与单次 SDD 全流程看板。',
  metadataBase: new URL(
    'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
  ),
  openGraph: {
    title: 'SDD 个人运行观察',
    description: '个人 Session 使用情况与单次 SDD 全流程看板。',
    url: 'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
    siteName: 'SDD 个人运行观察',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SDD 个人运行观察',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDD 个人运行观察',
    description: '个人 Session 使用情况与单次 SDD 全流程看板。',
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
