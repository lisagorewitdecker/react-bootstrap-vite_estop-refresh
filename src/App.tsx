import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import CookieBanner from "./components/CookieBanner";
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsService from './pages/TermsService';
import Sitemap from './pages/Sitemap';
import ScrollToTop from "react-scroll-to-top";
import DMVCourses from './pages/DMVCourses';
import RouteAccessibility from './components/RouteAccessibility';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {
    return (
        <>
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <RouteAccessibility/>
            <NavBar/>
            <main id="main-content" tabIndex={-1} className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/testimonials" element={<Testimonials/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/dmv-courses" element={<DMVCourses/>}/>
                    <Route path="/schedule" element={<Schedule/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                    <Route path="/blog/:id" element={<BlogPostDetail/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/terms-of-service" element={<TermsService/>}/>
                    <Route path="/sitemap" element={<Sitemap/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <CookieBanner/>
            <Footer/>
            <ScrollToTop top={100} aria-label="Back to top" onClick={() => {
                document.getElementById('main-content')?.focus({preventScroll: true});
                window.scrollTo({top: 0, behavior: 'instant'});
            }}/>
        </>
    );
}

export default App;