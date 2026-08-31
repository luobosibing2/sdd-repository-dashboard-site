import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SDD 数字化看板',
  description:
    '管理口 SDD 执行效率说明与数据导入中心：周期指标、任务明细、批次状态和每日简报。',
  metadataBase: new URL(
    'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
  ),
  openGraph: {
    title: 'SDD 数字化看板',
    description: '管理口 SDD 执行效率说明与数据导入中心：周期指标、任务明细、批次状态和每日简报。',
    url: 'https://sdd-repository-dashboard.chengyizhou970514.chatgpt.site',
    siteName: 'SDD 数字化看板',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SDD 数字化看板 · 执行效率说明',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDD 数字化看板',
    description: '管理口 SDD 执行效率说明与数据导入中心：周期指标、任务明细、批次状态和每日简报。',
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
