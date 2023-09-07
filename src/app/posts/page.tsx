import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '전체게시글 | Corner',
    description: '풀스택에 관련한 글',
};

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];
    return <FilterablePosts posts={posts} categories={categories} />;
}
