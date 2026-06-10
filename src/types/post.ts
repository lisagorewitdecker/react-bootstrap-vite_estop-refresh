// noinspection JSUnusedGlobalSymbols

export interface Post {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    isFeatured: boolean;
    date: string;
    image: string;
    style?: string;
}

export default Post;