import Hero from '@/components/Hero';
import FeaturePosts from '@/components/FeaturePosts';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
    return (
        // 프로필 만들기
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold mb-32">Welcome to Corner's Blog</h1>
                <Hero />
            </div>
            <FeaturePosts />
            <CarouselPosts />
        </>
    );
}
