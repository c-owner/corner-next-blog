import PostsGrid from '@/components/PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function FeaturePosts() {
    const posts = await getAllPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
