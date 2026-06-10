import React from 'react';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import ScrollToTop from "react-scroll-to-top";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./index.css";

const MainLayout: React.FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar/>
            <main className="flex-grow-1">
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
            <CookieBanner/>
            <ScrollToTop smooth top={100}/>
        </div>
    );
};

export default MainLayout;