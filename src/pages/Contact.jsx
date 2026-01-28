import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-page">
            <section className="page-header contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for custom orders and enquiries</p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <motion.div
                            className="contact-info"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <h2>Get in Touch</h2>

                            <div className="info-item">
                                <div className="icon">📞</div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="https://wa.me/919843227827" target="_blank" rel="noopener noreferrer">
                                            +91 98432 27827
                                        </a>
                                    </p>
                                    <p className="sub">Available on WhatsApp</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon">✉️</div>
                                <div>
                                    <h3>Email</h3>
                                    <p><a href="mailto:zionexfurniture@gmail.com">zionexfurniture@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon">📍</div>
                                <div>
                                    <h3>Address</h3>
                                    <p>48 Saravana Nagar, TVS nagar</p>
                                    <p>Coimbatore - 641025</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon">🕒</div>
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="map-container"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.887961298154!2d76.9408!3d11.0201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859187372d893%3A0xa63a2339d2c2560e!2sTVS%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Zionex Location"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
