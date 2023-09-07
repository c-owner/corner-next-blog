import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
};

// 기존의 A 타입과 B 타입을 인터섹션한 타입
export type PostData = Post & {
    content: string;
    next: Post | null;
    prev: Post | null;
};

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() //
        .then((posts) => posts.filter((post) => !post.featured));
}

/*
 * cache 사용으로 한 페이지에서의 중복 호출을 방지하며 성능 개선.
 * cache 함수는 한 페이지 한해서만 캐싱이 되므로, 다른 페이지에서는 다시 호출이 됨
 */
export const getAllPosts = cache(async () => {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<Post[]>(JSON.parse)
        .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    // const metadata = await getAllPosts().then((posts) => posts.find((post) => post.path === fileName));
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);

    if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index - 1] : null;
    const prev = index < posts.length - 1 ? posts[index + 1] : null;

    const content = await readFile(filePath, 'utf-8');
    return { ...post, content, next, prev };
}
