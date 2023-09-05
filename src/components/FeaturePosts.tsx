import PostsGrid from '@/components/PostsGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturePosts() {
    const posts = await getFeaturedPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
