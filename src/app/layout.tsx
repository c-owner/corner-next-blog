import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: {
        default: '코너의 블로그',
        template: '코너의 블로그 | %s',
    },
    description: '효율을 중시하는 코너의 블로그',
    icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={sans.className}>
            <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
