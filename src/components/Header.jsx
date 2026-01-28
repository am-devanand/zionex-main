import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Furnitures', path: '/furnitures' },
        { name: 'Materials', path: '/materials' },
        { name: 'Contact Us', path: '/contact' }
    ]

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <h1>Zionex Furniture</h1>
                    </Link>

                    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                        <div className="mobile-nav-logo">
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                <h1>Zionex</h1>
                            </Link>
                        </div>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary mobile-enquiry-btn" onClick={() => setMenuOpen(false)}>
                            ENQUIRE NOW
                        </Link>
                    </nav>

                    <button
                        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
