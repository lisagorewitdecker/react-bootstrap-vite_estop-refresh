import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroDriver from '../assets/hero-driver.jpg';

const Home: React.FC = () => {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <div className="text-white text-center d-flex align-items-center justify-content-center" style={{
                backgroundImage: `linear-gradient(rgba(5, 10, 44, 0.65), rgba(5, 10, 44, 0.65)), url("${heroDriver}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh',
                padding: '4rem 1rem'
            }}>
                <Container>
                    <h1 className="display-4 fw-bold text-uppercase mb-3 tracking-wide">
                        ESTOP DRIVING SCHOOL, DMV-APPROVED DRIVING LESSONS IN NOVATO, MARIN & SONOMA COUNTIES
                    </h1>
                    <h2 className="h4 fw-light text-uppercase mb-4 opacity-90">
                        BEHIND-THE-WHEEL TRAINING FOR TEENS, ADULTS, & SENIORS — SINCE 1983
                    </h2>
                    <Link to="/schedule"
                          className="fw-bold px-5 py-3 text-uppercase size-lg rounded-pill shadow btn btn-danger border-0"
                          style={{backgroundColor: '#dc3445'}}>
                        BOOK NOW!
                    </Link>
                </Container>
            </div>

            {/* --- WELCOME TEXT SECTION --- */}
            <Container className="py-5">
                <div className="py-4 text-dark text-center">
                    <p className="lead fw-semibold mx-md-5 mb-4">
                        Welcome to e-Stop Driving School! I am Tony or T.K. (Teshome Kebere), founder, owner and Lead Driving Instructor
                        at e-Stop Driving School (previously known as Nile Driving School). I have been educating, people of all ages,
                        how to drive safely, and confidently since 1983.
                    </p>

                    <p className="lead fw-semibold mx-md-5 mb-4">
                        Since 1983, I have over 43 years of experience training and teaching adults, teenagers and seniors
                        behind-the-wheel driving. All while doing what I love!
                    </p>

                    <p className="lead fw-semibold mx-md-5 mb-4">
                        I have trained more than 33,000 teenagers and over 5,000 adults and seniors during my almost
                        four-decade career (of course, they are of legal driving age and status). Basic training and
                        services are at a flat hourly rate of $125. If you need any additional services, please do not
                        hesitate to contact me for more details.
                    </p>

                    <p className="lead fw-semibold mx-md-5 mb-4">
                        Every Day, I Take Great Pride In and Receive So Much Joy From What I Do For a Living, I Love My Job!
                    </p>

                    <p className="lead fw-semibold mx-md-5 fst-italic">
                        — Tony or T.K. (Teshome Kebere): Licensed Instructor No. 2055001
                    </p>
                </div>
            </Container>

            <hr className="my-0" />

            {/* --- PRICING CARDS SECTION --- */}
            <div className="bg-white py-5 text-dark">
                {/* fluid="xl" allows the container to stretch wider on large screens */}
                <Container fluid="xl" className="px-lg-5">
                    <div className="text-center mb-5">
                        <h2 className="display-4 fw-bold mb-3">
                            <span className="text-danger">SIMPLE RATES</span>{' '}
                            <span style={{fontFamily: 'Overpass', color: '#222d3b'}}>
                                E-STOP DRIVING SCHOOL
                            </span>
                        </h2>
                        <h6 className="text-muted">
                            Professional, Valet Driving Instruction Starting at Your Front Door.
                        </h6>
                    </div>

                    {/* justify-content-center keeps the 3 columns perfectly centered */}
                    <div className="row g-4 justify-content-center">

                        {/* TEENAGERS CARD */}
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 border-0 shadow-sm p-4 bg-light rounded-5 card">
                                <div className="text-center d-flex flex-column card-body px-xl-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">
                                        TEENAGERS
                                    </h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ PER HOUR</small>
                                    </div>
                                    {/* Text is centered inside the card for a uniform look */}
                                    <ul className="list-unstyled text-center mb-5 flex-grow-1">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            CERTIFICATE OF COMPLETION.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            DMV PRE-EXAM PREP.
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            VALET PICK-UP &amp; DROP-OFF
                                        </li>
                                    </ul>
                                    <Link to="/schedule"
                                          className="fw-bold px-4 py-3 text-uppercase size-lg rounded-pill shadow danger-button btn btn-danger border-0 w-100"
                                          style={{backgroundColor: '#dc3445'}}>
                                        BOOK TEENAGERS
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ADULTS CARD */}
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 border-0 shadow p-4 bg-dark text-white rounded-5 position-relative card">
                                <div className="position-absolute top-0 start-50 translate-middle">
                                    <span className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2 shadow-sm">
                                        MOST POPULAR
                                    </span>
                                </div>
                                <div className="text-center d-flex flex-column pt-4 card-body px-xl-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning small tracking-widest">
                                        ADULTS
                                    </h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-light opacity-75 fst-italic">/ PER HOUR</small>
                                    </div>
                                    <ul className="list-unstyled text-center mb-5 flex-grow-1">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            NERVOUS DRIVER SPECIALIST
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            FREEWAY &amp; CITY DRIVING TRAINING
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            ONE-ON-ONE INSTRUCTION
                                        </li>
                                    </ul>
                                    <Link to="/schedule"
                                          className="fw-bold px-4 py-3 text-uppercase size-lg rounded-pill shadow danger-button btn btn-danger border-0 w-100"
                                          style={{backgroundColor: '#dc3445'}}>
                                        BOOK ADULTS
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* SENIORS CARD */}
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 border-0 shadow-sm p-4 bg-light rounded-5 card">
                                <div className="text-center d-flex flex-column card-body px-xl-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-muted small tracking-widest">
                                        SENIORS
                                    </h6>
                                    <div className="mb-4">
                                        <span className="display-5 fw-bold">$125</span>
                                        <small className="d-block text-muted fst-italic">/ PER HOUR</small>
                                    </div>
                                    <ul className="list-unstyled text-center mb-5 flex-grow-1">
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            SAFETY EVALUATIONS
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            REFRESHER COURSES
                                        </li>
                                        <li className="mb-3 small">
                                            <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                            DMV PRE-EXAM PREP
                                        </li>
                                    </ul>
                                    <Link to="/schedule"
                                          className="fw-bold px-4 py-3 text-uppercase size-lg rounded-pill shadow danger-button btn btn-danger border-0 w-100"
                                          style={{backgroundColor: 'rgb(220 52 69)'}}>
                                        BOOK SENIORS
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* --- CONTACT SUPPORT --- */}
                    <div className="text-center pt-5 mt-4">
                        <h3 className="fw-bold mb-4">
                            HAVE ANY ADDITIONAL QUESTIONS?
                        </h3>
                        <p className="text-muted mb-5">
                            Our Team Is Always Here To Assist You In Finding The Perfect Driving Instruction Package/s For Your Needs!
                        </p>
                        <Link to="/schedule" className="px-5 py-3 rounded-pill fw-bold text-uppercase btn btn-danger">
                            CONTACT SUPPORT
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Home;