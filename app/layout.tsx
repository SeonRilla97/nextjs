import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// 전체 페이지의 공통 처리 가능 Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
