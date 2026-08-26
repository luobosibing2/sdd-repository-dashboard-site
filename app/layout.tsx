import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SDD 执行成本观察',
  description:
    '管理口代码仓总览与六阶段 SDD / Implement 平均成本对比。',
  metadataBase: new URL(
    'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
  ),
  openGraph: {
    title: 'SDD 执行成本观察',
    description: '管理口代码仓总览与六阶段 SDD / Implement 平均成本对比。',
    url: 'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
    siteName: 'SDD 个人运行观察',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SDD 执行成本观察',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDD 执行成本观察',
    description: '管理口代码仓总览与六阶段 SDD / Implement 平均成本对比。',
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
