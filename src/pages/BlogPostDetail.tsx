import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {blogPosts} from '../data/blogData';
import BlogPost from '../types/blog';

const BlogPostDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const post: BlogPost | undefined = blogPosts.find(p => p.id === id);
    if (!post) {
        return (
            <div
                className="text-center py-5"
            >
                <h3
                    className="text-danger"
                >
                    OOPS! ARTICLE NOT FOUND.
                </h3>
                <p
                    className="text-muted"
                >
                    The post you are trying to view doesn&apos;t exist or has moved.
                </p>
                <Link
                    to="/blog"
                    className="btn btn-primary mt-3">
                    BACK TO BLOG HOME
                </Link>
            </div>
        );
    }
    return (
        <div
            className="container py-5"
            style={{maxWidth: '800px'}}
        >
            <Link
                to="/blog"
                className="btn btn-sm btn-outline-secondary mb-4">
                &larr; Back to Articles
            </Link>
            <article>
                <header
                    className="mb-4">
                    <span
                        className="badge bg-primary mb-2"
                    >
                        {post.category}
                    </span>
                    <h1
                        className="fw-bold mb-2 display-5"
                    >
                        {post.title}
                    </h1>
                    <p
                        className="text-muted"
                    >
                        Published on {post.date}
                    </p>
                    <img
                        src={post.image}
                        className="img-fluid rounded shadow-sm mb-4 w-100"
                        alt={post.title}
                    />
                </header>
                <section
                    className="fs-5 lh-base text-secondary"
                >
                    <p>
                        {post.content}
                    </p>
                </section>
            </article>
        </div>
    );
};
export default BlogPostDetail;