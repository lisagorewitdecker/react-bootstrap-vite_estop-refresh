// noinspection JSUnusedGlobalSymbols

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Plan {
    category: string;
    price: string;
    badge?: string;
    features: string[];
    isFeatured: boolean;
    path: string;
}
export const PricingTable: React.FC = () => {
    const navigate = useNavigate();
    const plans: Plan[] = [
        {
            category: "Teenagers",
            price: "125",
            features: ["Certificate of Completion", "DMV Test Preparation", "Dual-Control Safety", "Patient Instruction", "Valet Pick-up & Drop-off"],
            isFeatured: false,
            path: "/book/teenagers"
        },
        {
            category: "Adults",
            price: "125",
            badge: "Most Popular",
            features: ["Nervous Driver Specialist", "Flexible Scheduling", "Freeway & City Training", "One-on-One Instruction", "Custom Lesson Plans"],
            isFeatured: true,
            path: "/book/adults"
        },
        {
            category: "Seniors",
            price: "125",
            features: ["Safety Evaluations", "Refresher Courses", "DMV Re-exam Prep", "Modern Car Tech Tutorial", "Door-to-Door Service"],
            isFeatured: false,
            path: "/book/seniors"
        }
    ];

    return (
        <section className="bg-white">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-4">
                        <span className="text-danger me-2">SIMPLE RATES</span> AT ESTOP DRIVING SCHOOL
                    </h1>
                    <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        Professional, Valet Driving Instruction Starting at Your Front Door.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    {plans.map((plan) => (
                        <div key={plan.category} className="col-12 col-md-4">
                            <div
                                className={`card h-100 border-0 shadow-sm p-4 d-flex flex-column justify-content-between position-relative 
                                ${ plan.isFeatured ? 'bg-dark text-white' : 'bg-light text-dark'}`}
                                style={{
                                    borderRadius: '2.5rem',
                                    border: plan.isFeatured ? 'none' : '1px solid #eee' }}>
                                <div>
                                    {plan.badge && (<div className="text-center mb-3">
                                            <span className="badge rounded-pill bg-warning text-dark text-uppercase px-3 py-2" style={{ fontSize: '0.65rem' }}>
                                                {plan.badge}
                                            </span>
                                        </div>
                                    )}
                                    <div className="card-body text-center p-0">
                                        <h6 className="text-uppercase fw-bold mb-4"
                                            style={{ color: plan.isFeatured ? '#abcfff' : '#6c757d',
                                            fontSize: '0.8rem', letterSpacing: '0.1rem' }}>
                                            {plan.category}
                                        </h6>
                                        <div className="mb-4">
                                            <span
                                                className="display-5 fw-black">
                                                ${plan.price}
                                            </span>
                                            <small
                                                className="d-block text-muted fst-italic">
                                                / per hour
                                            </small>
                                        </div>
                                        <ul className="list-unstyled text-start mb-5" style={{ fontSize: '0.9rem' }}>
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="mb-3 d-flex align-items-center gap-2">
                                                    <CheckCircle2 size={18} style={{ color: '#facc15', flexShrink: 0 }} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Button variant={plan.isFeatured ? "warning" : "dark"}
                                    className="w-100 fw-bold rounded-pill py-3 text-uppercase"
                                    style={{ fontSize: '0.75rem' }}
                                    onClick={() => navigate(plan.path)}>
                                    Book {plan.category} Lesson
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default PricingTable;