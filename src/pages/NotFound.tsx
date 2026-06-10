import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';

const NotFound: FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold mb-3">
                        <span className="text-danger text-uppercase">404</span> PAGE NOT FOUND
                    </h1>
                    <p className="lead text-muted mb-0" style={{ maxWidth: '750px' }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>
            </div>
            <Container className="py-5 my-5 text-center">
                <div className="py-4">
                    <div className="mb-4">
                        <i className="bi bi-exclamation-triangle text-danger" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h2 className="fw-bold mb-3 text-uppercase">Oops! You&rsquo;ve drifted off course.</h2>
                    <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        Don&apos;t worry, even the best drivers make a wrong turn sometimes. Let&apos;s get you back on the right road!
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Link
                            to="/"
                            className="px-5 py-3 rounded-pill fw-bold text-uppercase shadow-sm btn btn-danger sizelarge"
                        >
                            GO TO HOMEPAGE
                        </Link>
                        <Link
                            to="/contact"
                            className="px-5 py-3 rounded-pill fw-bold text-uppercase shadow-sm btn btn-primary sizelarge"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;