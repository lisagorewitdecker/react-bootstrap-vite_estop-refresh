import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
            <Container>
                <Row className="gy-4">
                    <Col lg={4}>
                        <h5 className="text-danger fw-bold mb-3">
                            <Link to="/" className="text-decoration-none">
                                <span className="text-white">ESTOP</span> <span className="text-danger">DRIVING SCHOOL</span>
                            </Link>
                        </h5>
                        <p className="text-white-50">
                            Providing Top-Tier Driver Education For Over 43+ Years.
                            <wbr/>
                            Safe Roads Start With Professional Training.
                        </p>
                    </Col>
                    <Col lg={2}>
                        <h6 className="fw-bold mb-3 text-white" style={{fontSize: '1.1em'}}>QUICK LINKS</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li>
                                <Link to="/privacy-policy" className="text-white text-decoration-none">
                                    PRIVACY POLICY
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-white text-decoration-none">
                                    TERMS OF SERVICE
                                </Link>
                            </li>
                            <li>
                                <Link to="/sitemap" className="text-white text-decoration-none">
                                    SITEMAP
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <h6 className="fw-bold mb-3 text-white" style={{fontSize: '1.1em'}}>CONTACT US</h6>
                        <ul className="list-unstyled text-white d-flex flex-column gap-2">
                            <li><i className="bi bi-geo-alt me-2 text-white"></i>SUITE N, 7075 REDWOOD BLVD.</li>
                            <li>NOVATO, CA 94945</li>
                            <li><i
                                className="bi bi-envelope me-2 text-danger"
                            ></i><a
                                href="mailto:tony@estopdrivingschool.com"
                                className="text-white text-decoration-none"
                            >
                                TONY@ESTOPDRIVINGSCHOOL.COM
                            </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h6 className="fw-bold mb-3 text-white" style={{fontSize: '1.1em'}}>HOURS</h6>
                        <ul className="list-unstyled text-white d-flex flex-column gap-1">
                            <li>MONDAY — SATURDAY:</li>
                            <li>8:00 AM — 7:00 PM</li>
                            <li>SUNDAY: CLOSED</li>
                        </ul>
                    </Col>
                </Row>
                <hr className="my-4 border-secondary opacity-25"/>
                <div className="d-flex align-items-center flex-column text-white small">
                    <p className="mb-0">© {new Date().getFullYear()} e-Stop Driving School. All rights reserved. Full-Stack Developer, Lisa Gorewit-Decker</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;