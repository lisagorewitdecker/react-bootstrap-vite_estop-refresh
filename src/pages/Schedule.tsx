
import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ScheduleIframe} from '../components/ScheduleIframe';

export const Schedule: React.FC = () => {
    return (
        <>
            <div className="bg-light text-dark">
                <Container className="py-5">
                    <h1 className="display-4 fw-bold mb-3 text-uppercase">
                        <span className="text-danger">Schedule Lesson/s</span> <span className="text-dark"> at eStop Driving School</span>
                    </h1>
                    <p className="lead text-muted mb-0" style={{ width: '700px', maxWidth:'100%'}}>
                        Please take a moment to look at our Google Calendar appointment scheduler below.
                        You can conveniently book one or all of your driving lessons online today!
                    </p>
                </Container>
            </div>
            <div className="bg-white text-dark">
                <Container className="py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xl-9">

                            <h2 className="h3 fw-bold text-danger text-uppercase mb-4 text-start">
                                Book Your Behind-The-Wheel Training
                            </h2>
                            <ScheduleIframe />
                            <div className="text-center py-3">
                                <h4 className="fw-bold mb-3 text-uppercase">Have Questions Before Booking?</h4>
                                <p className="text-muted mb-4">
                                    If you need alternative accommodations or have custom request needs, feel free to reach out.
                                </p>
                                <Link to="/contact"
                                      className="px-5 py-3 rounded-pill fw-bold text-uppercase border-0 shadow text-white btn btn-danger"
                                      style={{backgroundColor: '#222d3b'}}>
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Schedule;