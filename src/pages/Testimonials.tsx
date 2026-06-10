import React, { useEffect } from 'react';
import {Container} from 'react-bootstrap';

const Testimonials: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className="bg-white">
            <div className="bg-light">
                <Container className="py-5">
                    <h1 className="display-3 fw-bold mb-3">
                        <span className="text-danger">STUDENT TESTIMONIALS.</span>
                    </h1>

                    <p>
                        Please take a moment to read our Google and Yelp student success stories. We are proud to share their invaluable experiences training with us, and we humbly encourage you to join our community of successful drivers!
                    </p>
                    <h2 className="h4 fw-bold mb-4">
                        ESTOP DRIVING SCHOOL – STUDENT SUCCESS STORIES.
                    </h2>
                    <div
                        className="elfsight-app-9dcbdaf2-db9c-4e48-88f7-c43334a209bf mb-4"
                        data-elfsight-app-lazy
                    >
                    </div>
                    <div
                        className="elfsight-app-92107e6f-4d62-4cb8-993d-6255281049d6"
                        data-elfsight-app-lazy
                    >
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Testimonials;