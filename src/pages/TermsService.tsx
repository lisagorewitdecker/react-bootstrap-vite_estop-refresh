import React, {FC} from 'react';

export const TermsService: FC = () => {
    return (
        <main>
            {/* --- Full-Width Header Banner --- */}
            <div className="bg-light text-dark py-5 mb-5 w-100 border-bottom">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <header>
                                <h1 className="display-4 fw-bold mb-3">
                                    TERMS OF <span className="text-danger">SERVICE</span>
                                </h1>
                                <p className="text-muted small mb-0">Effective Date: May 2026</p>
                            </header>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Terms Content --- */}
            <div className="container pb-5">
                <div className="row justify-content-center">
                    <article className="col-lg-10">

                        <section className="mb-4">
                            <h4 className="fw-bold text-danger mb-2">1. Lesson Requirements</h4>
                            <p className="text-dark">
                                All students must possess a valid California Learner&rsquo;s Permit or Driver&rsquo;s License during every behind-the-wheel lesson.
                                Failure to produce a valid permit or license will result in a cancelled lesson and a full charge.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold text-danger mb-2">2. Pricing & Payments</h4>
                            <p className="text-dark">
                                Lessons are charged at a flat rate of <strong>$125 per hour</strong>. Payment is due at the time of service unless otherwise
                                arranged directly with eStop Driving School.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold text-danger text-uppercase mb-2">3. Cancellation Policy</h4>
                            <p className="text-dark">
                                We require at least <strong>24 hours notice</strong> for cancellations. Late cancellations or &ldquo;no-shows&rdquo; at the agreed
                                valet pick-up location will be subject to a standard cancellation fee.
                            </p>
                        </section>

                        <section className="mb-4">
                            <h4 className="fw-bold text-danger text-uppercase mb-2">4. Safety & Liability</h4>
                            <p className="text-dark">
                                Tony (Teshome) and eStop Driving School prioritize student safety. We reserve the right to terminate a lesson immediately if a
                                student is deemed to be under the influence of any substance or acting in a reckless manner that endangers themselves, the public,
                                or the instructor.
                            </p>
                        </section>

                        {/* Contact Callout */}
                        <div className="bg-light p-4 rounded-4 border shadow-sm mt-5 text-center">
                            <p className="mb-0 text-muted fst-italic small">
                                For any questions or updates regarding these legal terms, please call or text us directly at <strong>415-897-7002</strong>.
                            </p>
                        </div>

                    </article>
                </div>
            </div>
        </main>
    );
};

export default TermsService;