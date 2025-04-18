import React, { useState } from 'react';
import contact from "../assets/contactus.jpg";
import '../css/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform action (e.g., send form data to server)
            document.getElementById("success").innerHTML="✔ Message Sent Successfully!";
            console.log('Form submitted successfully');
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }else{
            document.getElementById("success").innerHTML="";
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    return (
        <>
            {/* <!-- Contact Start --> */}
            <div className="contact">
                <div className="container">
                    {/* <div className="section-header text-center">
                        <h2>Contact with us for any query</h2>
                    </div> */}
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fa fa-map-marker-alt"></i>
                            <div className="contact-text">
                                <h3>Address</h3>
                                <a href="https://www.google.com/maps/place//@27.7465179,85.3244763,15.44z/data=!4m8!1m7!3m6!1s0x3bc2eb962ae682bf:0x8de98404f56323e3!2sVIT+INSTRUMENTATION+DEPARTMENT!8m2!3d18.4636275!4d73.8678019!16s%2Fg%2F11h_v74q8p?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><p>Tokha-5, Kathmandu, Nepal</p></a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-phone-alt"></i>
                            <div className="contact-text">
                                <h3>Phone</h3>
                                <a href=" tel:+977-9843237329"><p>+977-9827399860</p></a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fa fa-envelope"></i>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <a href="mailto:mrazzanand@gmail"><p>mrazzanand@gmail</p></a>
                            </div>
                        </div>
                    </div> <br /><br /><br />
                    <div className="contact-img">
                        <img src={contact} alt="Image" />
                    </div>
                    <div className="contact-form">
                        <div className='sent text-success' id="success"></div>
                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} noValidate>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete='name' required />
                                <p className="text-danger">{errors.name}</p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} autoComplete='email' required />
                                <p className="text-danger">{errors.email}</p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                <p className="text-danger">{errors.subject}</p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                <p className="text-danger">{errors.message}</p>
                            </div>
                            <div>
                                <button className="btn btn-custom" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    );
}

export default ContactForm;
