export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    isFeatured: boolean;
    date: string;
    image: string;
    style?: string;
    slug: string;
}
// noinspection JSUnusedGlobalSymbols
export const safeDrivingTipsTeenagers: BlogPost = {
    id: "safe-driving-teens-01",
    title: "Safe Driving Tips for Teenagers",
    summary: "Essential tips to keep new teenage drivers safe on the road.",
    content: "Full article content goes here...",
    category: "Safety",
    isFeatured: true,
    date: "2026-06-08",
    image: "/images/safe-driving.jpg",
    slug: "safe-driving-tips-for-teenagers"
};
export default BlogPost;