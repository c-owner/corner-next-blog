import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from '@/components/PostCard';
import MultiCarousel from '@/components/MultiCarousel';

export default async function CarouselPosts() {
    const posts = await getNonFeaturedPosts();
    return (
        <section className="my-4">
            <h2 className="text-2xl font-bold my-2">You May Like</h2>
            <MultiCarousel>
                {posts.map((post) => (
                    <PostCard key={post.path} post={post} />
                ))}
            </MultiCarousel>
        </section>
    );
}
