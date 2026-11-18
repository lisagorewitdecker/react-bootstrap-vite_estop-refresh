// noinspection AnonymousFunctionJS

import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Sitemap: FC = () => {
    const mainPages = [
        {name: "Home", url: "/"},
        {name: "About Tony", url: "/about"},
        {name: "Student Testimonials", url: "/testimonials"},
        {
            name: "Contact & Booking",
            url: "/contact"
        }
    ];
    const services = [
        {
            name: "All Driving Services",
            url: "/services"
        },
        {
            name: "Schedule a Lesson",
            url: "/schedule"
        },
        {
            name: "DMV Courses",
            url: "/dmv-courses"
        },
        {
            name: "Driving School Blog",
            url: "/blog"
        }
    ];
    const legal = [
        {name: "Privacy Policy", url: "/privacy-policy"},
        {name: "Terms of Service", url: "/terms-of-service"},
        {name: "Site Map", url: "/sitemap"}
    ];
    return (
        <div className="min-vh-100 bg-white">
            <div
                className="bg-light text-dark py-5 mb-5 w-100 border-bottom">
                <Container>
                    <Row
                        className="justify-content-center text-center">
                        <Col lg={10}>
                            <header>
                                <h1 className="display-4 fw-bold text-uppercase mb-3">Sitemap</h1>
                                <p className="text-muted lead mb-0">Find
                                    everything you
                                    need at eStop
                                    Driving
                                    School</p>
                            </header>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="pb-5">
                <Row
                    className="justify-content-center g-4">
                    <Col md={4} lg={3}>
                        <h2 className="h5 fw-bold text-danger text-uppercase mb-3">Main
                            Pages</h2>
                        <ul className="list-unstyled">
                            {mainPages.map((link) => (
                                <li key={link.url}
                                    className="mb-2">
                                    <Link to={link.url}
                                       className="text-dark text-decoration-none hover-danger">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4} lg={3}>
                        <h2 className="h5 fw-bold text-danger text-uppercase mb-3">Services</h2>
                        <ul className="list-unstyled">
                            {services.map((link) => (
                                <li key={link.url}
                                    className="mb-2">
                                    <Link to={link.url}
                                       className="text-dark text-decoration-none">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4} lg={3}>
                        <h2 className="h5 fw-bold text-danger text-uppercase mb-3">Legal
                            & Info</h2>
                        <ul className="list-unstyled">
                            {legal.map((link) => (
                                <li key={link.url}
                                    className="mb-2">
                                    <Link to={link.url}
                                       className="text-dark text-decoration-none">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Sitemap;
