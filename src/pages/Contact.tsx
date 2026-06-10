import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Container} from 'react-bootstrap';
import ContactState from "../types";

const Contact: FC = () => {
    const [formData, setFormData] = useState<ContactState>({
        fullName: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState<Partial<ContactState>>({});
    const [isSent, setIsSent] = useState<boolean>(false);

    const validate = (): boolean => {
        const newErrors: Partial<ContactState> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Name is required";

        const phoneRegex = /^\d{10}$/;

        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            newErrors.phone = "Enter a valid 10-digit number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        setFormData(prev => ({...prev, [id]: value}));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setIsSent(true);
            console.log("Form Submitted:", formData);
        }
    };
    return (
        <div className="bg-white">
            <div className="bg-light">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-3">
                       <span className="text-danger">
                        CONTACT US</span> ESTOP DRIVING SCHOOL.</h1>
                    <p className="lead text-muted max-w-2xl">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam. Sed
                        euismod, nisl eget aliquam ultricies, nunc nisl aliquet nisl, eget aliquam nisl nisl eget
                        nisl.
                    </p>
                </div>
            </div>
            <Container className="my-5">
                <div className="align-items-start">

                    <div className="row g-5">
                        <div className="col-lg-5">
                            <h2 className="text-3xl font-bold text-red-600 mb-4">
                                LET&rsquo;S GET YOU LICENSED</h2>
                            <p className="lead mb-5 text-secondary">
                                Have Questions About Teen Permits or Adult Brush-Up Lessons? Send a Message or Call Tony
                                Directly.
                            </p>

                            <div className="card border-0 bg-light p-4 mb-4 shadow-sm">
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-telephone-fill text-danger fs-3 me-3"></i>
                                    <h5 className="mb-0">415-897-7002</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-chat-dots-fill text-danger fs-3 me-3"></i>
                                    <h5 className="mb-0">Text Friendly Service</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            {isSent ? (
                                <div
                                    className="text-center p-5 bg-light rounded shadow-sm">
                                    <i
                                        className="bi bi-check-circle-fill text-success display-1"></i>
                                    <h2
                                        className="mt-3">Message Sent!</h2>
                                    <p
                                        className="x-small text-secondary mb-0">Tony will get back to you shortly.</p>
                                    <button
                                        className="btn btn-outline-danger mt-3"
                                        onClick={() => setIsSent(false)}>
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                        <input
                                            type="tel"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            id="phone"
                                            placeholder="415-897-7002"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label fw-bold">Message / Pickup
                                            Location</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Your Text Goes Here!"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        >

                                        </textarea>
                                    </div>

                                    <button type="submit" className="btn btn-danger btn-md w-100 fw-bold">
                                        Send Request
                                    </button>
                                </form>
                            )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );

};

export default Contact;