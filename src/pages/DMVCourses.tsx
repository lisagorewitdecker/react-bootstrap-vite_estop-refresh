import React from 'react';
import { Container } from 'react-bootstrap';

const DMVCourses: React.FC = () => {
    return (
        <>
            <div className="bg-white text-dark">
                {/* HEADER SECTION - Added text-center here */}
                <div className="bg-light">
                    <Container className="py-5">
                        <h1 className="display-4 fw-bold mb-3 text-uppercase">
                            <span className="text-dark">DMV APPROVED COURSES</span> <span className="text-danger">ESTOP DRIVING SCHOOL</span>
                        </h1>
                    </Container>
                </div>

                {/* 3-COLUMN SERVICES SECTION (NO CARDS) */}
                <div className="bg-white py-5 text-dark">
                    <Container>
                        <div className="text-center mb-5">
                            <h5 className="display-5 fw-bold mb-3">
                              OFFICIAL DMV APPROVED SERVICES
                            </h5>
                        </div>

                        {/* Added justify-content-center here to center the columns */}
                        <div className="row g-5 justify-content-center">
                            {/* COLUMN 1: DRIVERS EDUCATION */}
                            <div className="col-md-4 text-center">
                                <h4 className="text-uppercase fw-bold mb-3 text-dark">
                                    DRIVERS EDUCATION
                                </h4>
                                <p className="text-muted small mb-4">
                                    Earn your official certificate of completion with our comprehensive, self-paced California DMV licensed courses built for student flexibility.
                                </p>
                                <div className="d-flex flex-column gap-2 mb-4">
                                    <a href="https://estop.finishtrafficschool2day.com/signup/index.html?secure=1&"
                                       className="text-danger fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Enroll in Drivers Ed
                                    </a>
                                    <a href="https://trafficschool.estopdrivingschoolonline.com/login"
                                       className="text-secondary fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Student Login
                                    </a>
                                </div>
                            </div>

                            {/* COLUMN 2: TRAFFIC SCHOOL */}
                            <div className="col-md-4 text-center">
                                <h4 className="text-uppercase fw-bold mb-3 text-dark">
                                    TRAFFIC SCHOOL
                                </h4>
                                <p className="text-muted small mb-4">
                                    Easily handle state-court and California DMV requirements. Access your interactive, state-licensed courses online 24/7 on any desktop or mobile device.
                                </p>
                                <div className="d-flex flex-column gap-2 mb-4">
                                    <a href="https://estop.finishtrafficschool2day.com/signup/index.html?secure=1&"
                                       className="text-danger fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Sign-Up for Traffic School
                                    </a>
                                    <a href="https://trafficschool.estopdrivingschoolonline.com/login"
                                       className="text-secondary fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Traffic School Login
                                    </a>
                                </div>
                            </div>

                            {/* COLUMN 3: STUDY GUIDE */}
                            <div className="col-md-4 text-center">
                                <h4 className="text-uppercase fw-bold mb-3 text-dark">
                                    350 Q&A STUDY GUIDE
                                </h4>
                                <p className="text-muted small mb-4">
                                    Ace your official DMV written permit exam on the very first try. Master real exam concepts with our specialized study guidelines and test prep frameworks.
                                </p>
                                <div className="d-flex flex-column gap-2 mb-4">
                                    <a href="https://estop.finishtrafficschool2day.com/signup/index.html?secure=1&"
                                       className="text-danger fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Buy Your Study Guide
                                    </a>
                                    <a href="https://trafficschool.estopdrivingschoolonline.com/login"
                                       className="text-secondary fw-semibold text-decoration-none small text-uppercase"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Study Guide Login
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </>
    );
};

export default DMVCourses;