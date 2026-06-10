import React, {FC, useState} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar: FC = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
            expanded={expanded}
            onToggle={(isOpen) => setExpanded(isOpen)}
        >
            <Container>
                <Navbar.Brand as={Link} to="/"
                              className="fw-bold tracking-wide text-uppercase"
                              onClick={() => setExpanded(false)}
                >
                    ESTOP <span
                    className="text-danger"
                >
                    DRIVING SCHOOL
                </span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                >
                    <Nav
                        className="ms-auto align-items-lg-center fw-semibold gap-2"
                        onClick={() => setExpanded(false)}
                    >
                        <Nav.Link
                            as={Link}
                            to="/"
                        >
                            HOME
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about">ABOUT</Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/services"
                        >
                            SERVICES
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/dmv-courses"
                        >
                            DMV COURSES
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/schedule"
                        >
                            SCHEDULE
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/blog"
                        >
                            BLOG
                        </Nav.Link>
                        <Nav.Item
                            className="ms-lg-3 mt-3 mt-lg-0"
                        >
                            <Link
                                to="/contact"
                                className="btn btn-danger text-white fw-bold px-4 py-2 rounded-pill shadow-sm"
                                style={{backgroundColor: '#dc3445', border: 'none'}}
                            >
                                BOOK NOW
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;