import React, {
    FC,
    useEffect,
    useState
} from 'react';

const CookieBanner: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        const consent = localStorage.getItem('estop_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);
    const handleAccept = (): void => {
        localStorage.setItem('estop_cookie_consent', 'true');
        setIsVisible(false);
    };
    if (!isVisible) return null;
    return (
        <div role='alert'
             className="fixed-bottom bg-dark text-white shadow-lg border-top border-secondary animate__animated animate__fadeInUp"
             style={{
                 backdropFilter: 'blur(10px)',
                 backgroundColor: 'rgba(33, 37, 41, 0.95)',
                 zIndex: 2050
             }}>
            <div className="container py-3">
                <div
                    className="row align-items-center">
                    <div
                        className="col-12 col-lg-9 text-center text-lg-start mb-3 mb-lg-0">
                        <h6 className="mb-1 fw-bold text-uppercase small tracking-wider text-danger">
                            COOKIE POLICY
                        </h6>
                        <p className="mb-0 small text-light opacity-75">
                            eStop Driving School
                            uses cookies to
                            optimize our website
                            for your learning
                            experience.
                            By
                            clicking &ldquo;Accept,&rdquo; you
                            agree to our use of
                            cookies for analytics
                            and site
                            functionality.
                            <a href="/privacy-policy"
                               className="text-decoration-none text-info fw-semibold ms-1">
                                View Our Privacy
                                Policy
                            </a>
                        </p>
                    </div>
                    <div
                        className="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end gap-2">
                        <button
                            onClick={handleAccept}
                            className="btn btn-danger px-4 py-2 fw-bold text-uppercase rounded-pill transition-all"
                            style={{letterSpacing: '1px'}}>
                            ACCEPT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;