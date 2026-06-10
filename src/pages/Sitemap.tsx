// noinspection AnonymousFunctionJS

import React, {FC} from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

const Sitemap: FC = () => {
    const mainPages = [
        {name: "Home", url: "/"},
        {name: "About Tony", url: "/about"},
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
            name: "Read Our Testimonials",
            url: "/testimonials"
        },
        {
            name: "Driving School Blog",
            url: "/blog"
        }
    ];
    const legal = [
        {name: "Privacy Policy", url: "/privacy"},
        {name: "Terms of Service", url: "/terms"},
        {name: "Site Map", url: "/sitemap"}
    ];
    return (
        <main className="min-vh-100 bg-white">
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
                        <h3 className="h5 fw-bold text-danger text-uppercase mb-3">Main
                            Pages</h3>
                        <ul className="list-unstyled">
                            {mainPages.map((link, idx) => (
                                <li key={idx}
                                    className="mb-2">
                                    <a href={link.url}
                                       className="text-dark text-decoration-none hover-danger">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4} lg={3}>
                        <h3 className="h5 fw-bold text-danger text-uppercase mb-3">Services</h3>
                        <ul className="list-unstyled">
                            {services.map((link, idx) => (
                                <li key={idx}
                                    className="mb-2">
                                    <a href={link.url}
                                       className="text-dark text-decoration-none">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={4} lg={3}>
                        <h3 className="h5 fw-bold text-danger text-uppercase mb-3">Legal
                            & Info</h3>
                        <ul className="list-unstyled">
                            {legal.map((link, idx) => (
                                <li key={idx}
                                    className="mb-2">
                                    <a href={link.url}
                                       className="text-dark text-decoration-none">
                                        <i className="bi bi-chevron-right text-danger me-2"></i>{link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
export default Sitemap;