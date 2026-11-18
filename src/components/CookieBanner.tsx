import React, {FC, useState} from 'react';

const CookieBanner: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(() => {
        try {
            return !localStorage.getItem('estop_cookie_consent');
        } catch {
            return true;
        }
    });
    const handleAccept = (): void => {
        try {
            localStorage.setItem('estop_cookie_consent', 'true');
        } catch {
            // Storage may be unavailable; the banner can still be dismissed.
        }
        setIsVisible(false);
    };
    if (!isVisible) return null;
    return (
        <aside aria-labelledby="cookie-policy-heading"
             className="bg-dark text-white shadow-lg border-top border-secondary">
            <div className="container py-3">
                <div
                    className="row align-items-center">
                    <div
                        className="col-12 col-lg-9 text-center text-lg-start mb-3 mb-lg-0">
                        <h2 id="cookie-policy-heading" className="h6 mb-1 fw-bold text-uppercase small tracking-wider text-danger">
                            COOKIE POLICY
                        </h2>
                        <p className="mb-0 small text-light">
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
                            type="button"
                            onClick={handleAccept}
                            className="btn btn-danger px-4 py-2 fw-bold text-uppercase rounded-pill transition-all"
                            style={{letterSpacing: '1px'}}>
                            ACCEPT
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default CookieBanner;