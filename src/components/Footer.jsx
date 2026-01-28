import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Zionex Furniture</h3>
                        <p>Crafting Excellence in Wooden and Steel Furnitures</p>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>📞 9843227827</p>
                        <p>✉️ zionexfurniture@gmail.com</p>
                        <p>📍 48 Saravana Nagar, TVS nagar, CBE-641025</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="/">Home</a>
                        <a href="/furnitures">Furnitures</a>
                        <a href="/materials">Materials</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Zionex Furniture. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
