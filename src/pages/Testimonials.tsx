import {Container} from 'react-bootstrap';
import GoogleReviewsAI from '../components/GoogleReviewsAI';

const Testimonials = () => (
    <>
        <div className="bg-light text-dark">
            <Container className="py-5">
                <h1 className="display-4 fw-bold mb-3 text-uppercase">Student Testimonials</h1>
                <p className="lead text-muted mb-0">
                    Hear from students and families who learned to drive with eStop Driving School.
                </p>
            </Container>
        </div>
        <Container>
            <GoogleReviewsAI/>
        </Container>
    </>
);

export default Testimonials;
