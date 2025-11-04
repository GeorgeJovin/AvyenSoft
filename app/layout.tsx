import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ConfigProvider } from 'antd';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CASS Technologies - Technology Consulting & Business Solutions',
  description:
    'Empowering success through consulting, innovation, operations, and growth solutions. Expert technology consulting for strategic planning, business planning, and process improvement.',
  keywords:
    'technology consulting, business consulting, strategic planning, process improvement, cloud solutions, Azure, Salesforce, Power BI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#5e6fb5',
            },
          }}
        >
          <Header />
          <main style={{ overflowX: 'hidden' }}>{children}</main>
          <Footer />
          <ScrollToTop />
        </ConfigProvider>
      </body>
    </html>
  );
}
