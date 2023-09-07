import Hero from '@/components/Hero';
import MyInfo from '@/components/MyInfo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Me | Corner',
    description: 'Corner 커리어 소개',
};

export default function AboutPage() {
    return (
        <section className="p-4">
            <Hero />
            <MyInfo />
        </section>
    );
}
