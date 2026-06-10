import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import tonyInCar from '../assets/tony-in-car.jpg';

const About: React.FC = () => {
    return (
        <>
            <div className="bg-light text-dark">
                <Container className="py-5">
                    <h1 className="display-4 fw-bold mb-3 text-uppercase">
                        <span className="text-danger">ABOUT</span> ESTOP DRIVING SCHOOL
                    </h1>
                    <p className="lead text-muted mb-0" style={{maxWidth: '750px'}}>
                        eStop Driving School proudly provides expert behind-the-wheel lessons to the following North Bay locations:
                        Novato, Tiburon, Petaluma, San Rafael, Corte Madera, Sausalito, Sebastopol, Mill Valley, San Anselmo, Greenbrae, and Kentfield. If your
                        location is not listed, please reach out to
                        Teshome (Tony) directly via text or phone call.
                    </p>
                </Container>
            </div>
            <div className="bg-white text-dark">
                <Container className="py-5">
                    <Row className="g-5 align-items-center">
                        <Col lg={6}>
                            <h2 className="h3 fw-bold text-danger text-uppercase mb-4">
                                EXPERT DRIVING INSTRUCTION IN THE NORTH BAY, SINCE 1983
                            </h2>
                            <div className="text-muted lead fs-6 mb-4">
                                <p className="mb-3">
                                    At eStop Driving School, we believe that defensive driving is a language. Our singular mission is
                                    to ensure every graduate can <strong>&ldquo;Speak STOP Fluently and Flawlessly For Life!&rdquo;</strong>
                                </p>
                                <p className="mb-0">
                                    Tony founded this driving academy in Marin County with an absolute commitment to dual-control
                                    vehicle safety configurations and patient, personalized professional instruction. As detailed on
                                    our <Link to="/services" className="text-danger fw-semibold">Services Page</Link>, we provide
                                    customized routines built for <strong>Teenagers</strong>, <strong>Adults</strong>, and <strong>Seniors</strong>.
                                </p>
                            </div>
                            <div className="p-4 rounded-4 shadow-sm text-white mb-4 mb-lg-0" style={{backgroundColor: '#222d3b'}}>
                                <h6 className="text-warning fw-bold text-uppercase tracking-widest mb-2 small">
                                    OUR PROMISE
                                </h6>
                                <p className="fst-italic mb-2 opacity-90">
                                    &ldquo;Whether you are an incredibly nervous beginner or an experienced motorist looking for an official
                                    DMV safety evaluation, we provide door-to-door, valet-style service 7 days a week to ensure you are road-ready and
                                    confident.&rdquo;
                                </p>
                                <div className="fw-bold text-end text-warning small">— Tony, Founder</div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="rounded-5 shadow-lg overflow-hidden border mb-4">
                                <img
                                    src={tonyInCar}
                                    alt="Tony inside the premium eStop Training Vehicle"
                                    className="img-fluid w-100"
                                    style={{display: 'block', maxHeight: '400px', objectFit: 'cover'}}
                                />
                            </div>
                            <div className="p-4 bg-light rounded-4 shadow-sm border">
                                <h5 className="fw-bold text-dark mb-3 text-uppercase border-bottom pb-2 tracking-wide">
                                    AWARDS &amp; RECOGNITION
                                </h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2 d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-danger me-2 fs-5"></i>
                                        <span className="fw-medium text-secondary">Best of Novato: Driving Instruction</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        <span className="fw-medium text-secondary">CA DMV State Certified &amp; Licensed</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        <span className="fw-medium text-secondary">43+ Years of Safety Excellence</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        <span className="fw-medium text-secondary">Top-Rated Nervous Driver Specialist</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default About;