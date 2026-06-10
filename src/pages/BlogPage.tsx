import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import BlogPost from '../types/blog';
import {blogPosts} from "../data/blogData";
// import {blogPosts} from '../data/blogData';

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const categories: string[] = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
    const featuredPost: BlogPost | undefined = blogPosts.find(post => post.isFeatured);
    const filteredPosts: BlogPost[] = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);
    return (
        <main className="min-vh-100 bg-white">
            <div className="bg-light text-dark py-5 mb-5 w-100 border-bottom">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={10}>
                            <header>
                                <h1 className="display-4 fw-bold text-uppercase mb-3">
                                    <span className="text-danger">eStop Driving School</span> <span className="text-dark">Blog</span>
                                </h1>
                                <p className="text-muted lead mb-0">
                                    Tips, guides, and resources for behind-the-wheel success
                                </p>
                            </header>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="pb-5">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        {featuredPost && selectedCategory === 'All' && (
                            <div className="card mb-5 border-0 shadow-sm overflow-hidden bg-light">
                                <div className="row g-0">
                                    <div className="col-md-6">
                                        <img
                                            src={featuredPost.image}
                                            style={{ maxWidth: '600px', width: '100%', height: '400px', objectFit: 'cover' }}
                                            alt={featuredPost.title}
                                        />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        <div className="card-body p-4">
                                            <span className="badge bg-danger mb-2">Featured — {featuredPost.category}</span>
                                            <h2 className="card-title fw-bold">{featuredPost.title}</h2>
                                            <p className="card-text text-muted">{featuredPost.summary}</p>
                                            <p className="card-text"><small className="text-muted">{featuredPost.date}</small></p>
                                            <Link to={`/blog/${featuredPost.id}`} className="btn btn-danger fw-bold text-white px-4">Read Full Article</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`btn btn-sm px-4 rounded-pill ${selectedCategory === category ? 'btn-dark' : 'btn-outline-secondary'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <h3 className="mb-4 fw-semibold text-uppercase tracking-wide">
                            {selectedCategory} <span className="text-danger">Articles</span>
                        </h3>
                        <div className="row g-4">
                            {filteredPosts.map((post: BlogPost) => (
                                <div key={post.id} className="col-md-6 col-lg-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <span className="badge bg-secondary align-self-start mb-2">{post.category}</span>
                                            <h5 className="card-title fw-bold">{post.title}</h5>
                                            <p className="card-text text-muted flex-grow-1">{post.summary}</p>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <small className="text-muted">{post.date}</small>
                                                <Link to={`/blog/${post.id}`} className="btn btn-sm btn-outline-danger fw-bold">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default BlogPage;