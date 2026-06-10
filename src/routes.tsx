import {createBrowserRouter} from 'react-router';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import DMVCourses from "./pages/DMVCourses";

createBrowserRouter([
    {
        'path': '/',
        element: <Home/>,
    },
    {
        "path": '/about',
        element: <About/>,
    },
    {
        'path': '/services',
        element: <Services/>,
    },
    {
        'path': '/dmv-courses',
        element: <DMVCourses/>,
    },
    {
        'path': '/schedule',
        element: <Schedule/>,
    },
    {
        'path': '/contact',
        element: <Contact/>,
    },
    {
        'path': '/blog',
        element: <BlogPage/>,
    },
    {
        'path': '/blog:id',
        element: <Contact/>,
    },
    {
        "path": '*',
        element: <NotFound/>,
    },
]);