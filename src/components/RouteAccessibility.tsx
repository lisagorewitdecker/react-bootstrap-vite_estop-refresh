import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

const RouteAccessibility = () => {
    const {pathname} = useLocation();
    const previousPath = useRef(pathname);

    useEffect(() => {
        const main = document.getElementById('main-content');
        const heading = main?.querySelector('h1')?.textContent?.trim();
        document.title = heading ? `${heading} | eStop Driving School` : 'eStop Driving School';

        if (previousPath.current !== pathname) {
            main?.focus({preventScroll: true});
            window.scrollTo({top: 0, behavior: 'instant'});
        }
        previousPath.current = pathname;
    }, [pathname]);

    return null;
};

export default RouteAccessibility;
