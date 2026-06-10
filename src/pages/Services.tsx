import React from 'react';
import {
    Card,
    Col,
    Container,
    Row
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import drivingLesson from '../assets/driving-lesson.jpg';

const Services: React.FC = () => {
    return (
        <div className="bg-white text-dark">
            <div className="bg-light">
                <Container className="py-5">
                    <h1 className="display-3 fw-bold mb-3">
                        OUR <span className="text-danger">SERVICES.</span>
                    </h1>
                    <p className="lead text-muted mb-4" style={{maxWidth: '700px'}}>
                        Whether you&rsquo;re a first-time driver or looking to refresh your skills,
                        we provide tailored instruction to ensure you&rsquo;re road-ready.
                    </p>
                </Container>
            </div>
            <Container className="py-5">
                <Row className="g-4 text-center">
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-shield-check" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase small tracking-widest mb-2">SAFETY FIRST</h5>
                        <p className="text-muted small px-2">Dual-Control Vehicles &amp; Certified Instructor.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-geo-alt" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase small tracking-widest mb-2">FREE PICKUP</h5>
                        <p className="text-muted small px-2">We Start and End Your Lesson at Your Doorstep.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-calendar-event" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase small tracking-widest mb-2">FLEXIBLE SCHEDULE</h5>
                        <p className="text-muted small px-2">7 Days a Week, Including Evenings.</p>
                    </Col>
                    <Col md={3}>
                        <div className="mb-3 text-danger text-uppercase">
                            <i className="bi bi-award" style={{fontSize: '1.75rem'}}></i>
                        </div>
                        <h5 className="fw-bold text-uppercase small tracking-widest mb-2">LICENSED</h5>
                        <p className="text-muted small px-2">Fully bonded and state-certified school.</p>
                    </Col>
                </Row>
                <hr className="my-5 opacity-10"/>
                <Row className="align-items-center py-3">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <h2 className="display-5 fw-bold mb-4 text-uppercase">
                            BEHIND-THE-WHEEL<br/>
                            <span className="text-danger">TRAINING</span>
                        </h2>
                        <p className="text-muted mb-4 lead fs-6">
                            Our primary focus is hands-on experience. We don&rsquo;t just teach you how to pass the test;
                            we teach you how to survive on today&rsquo;s busy roads. From parallel parking to
                            high-speed merging, our curriculum covers it all.
                        </p>
                        <ul className="list-unstyled layout-list">
                            <li className="mb-3">
                                <i className="bi bi-check-lg text-danger me-2 fw-bold"></i> Defensive Driving Techniques
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-check-lg text-danger me-2 fw-bold"></i> Freeway and Canyon Driving.
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-check-lg text-danger me-2 fw-bold"></i> Preparation For the California DMV Drive Test.
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="img-fluid rounded-5 shadow-lg w-100"
                            alt="Driving lesson behind the wheel training"
                            src={drivingLesson}
                            style={{objectFit: 'cover', maxHeight: '450px'}}
                        />
                    </Col>
                </Row>
                <hr className="my-5 opacity-10"/>
                <div className="py-4">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3">
                            <span className="text-danger">SIMPLE RATES</span>{' '}
                            <span style={{fontFamily: "'Overpass', sans-serif", color: '#222d3b'}}>
                                AT ESTOP DRIVING SCHOOL
                            </span>
                        </h2>
                        <h6 className="text-muted fw-normal">
                            Professional, Valet Driving Instruction Starting at Your Front Door.
                        </h6>
                    </div>
                    <Row className="g-4 justify-content-center">
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-light rounded-5">
                                <Card.Body className="text-center d-flex flex-column h-100">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">Teenagers</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-2">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Certificate of Completion.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> DMV Test Preparation.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Valet Pick-up &amp; Drop-off.
                                        </li>
                                    </ul>
                                    <Link to="/schedule"
                                          className="rounded-pill py-3 fw-bold text-uppercase mt-auto border-0 shadow-sm text-white btn btn-danger"
                                          style={{backgroundColor: '#dc3445'}}>
                                        BOOK TEENAGERS
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow p-4 bg-dark text-white rounded-5 position-relative">
                                <div className="position-absolute top-0 start-50 translate-middle">
                                    <span className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2 shadow-sm">
                                        MOST POPULAR
                                    </span>
                                </div>
                                <Card.Body className="text-center d-flex flex-column h-100 pt-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning small tracking-widest">Adults</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-light opacity-75 fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-2">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Nervous Driver Specialist
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Freeway &amp; City Training
                                        </li>
                                        <li className="bi mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> One-on-One Instruction
                                        </li>
                                    </ul>
                                    <Link
                                        to="/schedule"
                                        className="rounded-pill py-3 fw-bold text-uppercase text-dark mt-auto shadow-sm btn btn-warning">
                                        BOOK ADULTS
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className="h-100 border-0 shadow-sm p-4 bg-light rounded-5">
                                <Card.Body className="text-center d-flex flex-column h-100">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">Seniors</h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ per hour</small>
                                    </div>
                                    <ul className="list-unstyled text-start mb-5 flex-grow-1 px-2">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Safety Evaluations
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> Refresher Courses
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i> DMV Re-exam Prep
                                        </li>
                                    </ul>
                                    <Link
                                        to="/schedule"
                                        className="rounded-pill py-3 fw-bold text-uppercase text-dark mt-auto shadow-sm btn btn-warning"
                                        style={{backgroundColor: '#dc3445'}}>
                                        BOOK SENIORS
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="bg-light py-5 mt-4">
                <Container className="text-center py-3">
                    <h3 className="fw-bold mb-3">Still Have Questions?</h3>
                    <p className="text-muted mb-4 mx-auto" style={{maxWidth: '500px'}}>
                        Our team is always here to help you find the perfect behind-the-wheel instruction package for your specific needs.
                    </p>
                    <Link
                        to="/contact"
                        className="px-5 py-3 rounded-pill fw-bold text-uppercase border-0 shadow text-white btn btn-danger"
                        style={{backgroundColor: '#222d3b'}}
                    >
                        Contact Support
                    </Link>
                </Container>
            </div>
        </div>
    );
};
export default Services;