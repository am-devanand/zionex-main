import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import EnquiryModal from '../components/EnquiryModal'
import './Home.css'

function Home() {
    const [modalOpen, setModalOpen] = useState(false)
    const [rating, setRating] = useState(0) // Start at 0 as requested
    const [ratingCount, setRatingCount] = useState(0)
    const [userRating, setUserRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    const materials = [
        { name: 'Premium Plywood', desc: 'Structural excellence', color: '#DEB887' },
        { name: 'Veneers', desc: 'Natural wood finish', color: '#8B4513' },
        { name: 'Laminates', desc: 'Durable & stylish', color: '#D4A574' }
    ]

    const handleRatingSubmit = (e) => {
        e.preventDefault()
        if (userRating === 0) return

        alert('Thank you for your rating!')
        // Calculate new average
        // New Average = ((Current * Count) + UserRating) / (Count + 1)
        const newCount = ratingCount + 1
        const newRating = ((rating * ratingCount) + userRating) / newCount

        setRating(parseFloat(newRating.toFixed(1)))
        setRatingCount(newCount)
        setUserRating(0)
    }

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="overlay-gradient"></div>
                <div className="hero-content container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        {rating > 0 && (
                            <div className="top-rating">
                                <span className="stars">★★★★★</span>
                                <span className="score">{rating}/5 based on {ratingCount} reviews</span>
                            </div>
                        )}
                        <h1>Crafting Excellence in Wooden and Steel Furnitures</h1>
                        <p>And Premium Interior Products for Your Dream Spaces</p>
                        <div className="hero-btn-container">
                            <button className="btn btn-primary hero-btn" onClick={() => setModalOpen(true)}>
                                Enquire Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Furniture Collection */}
            <section className="section furniture-collection">
                <div className="container">
                    <h2 className="section-title">Our Furniture Collection</h2>
                    <div className="furniture-grid">
                        {['Home Furniture', 'Office Furniture', 'Banquet & Restaurant', 'Garden Furniture', 'Hospital Furniture', 'Industrial Furniture', 'School & Institutional'].map((item, index) => (
                            <motion.div
                                key={item}
                                className="furniture-card"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h3>{item}</h3>
                            </motion.div>
                        ))}
                    </div>
                    <div className="center-btn">
                        <Link to="/furnitures" className="btn btn-secondary">View All Furnitures</Link>
                    </div>
                </div>
            </section>

            {/* Materials Highlight */}
            <section className="section materials-highlight">
                <div className="container">
                    <h2 className="section-title">Premium Materials</h2>
                    <div className="materials-grid">
                        {materials.map((mat, index) => (
                            <motion.div
                                key={mat.name}
                                className="material-card"
                                whileHover={{ y: -10 }}
                                style={{ borderTop: `4px solid ${mat.color}` }}
                            >
                                <h3>{mat.name}</h3>
                                <p>{mat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="center-btn">
                        <Link to="/materials" className="btn btn-secondary">View All Materials</Link>
                    </div>
                </div>
            </section>

            {/* Ratings Section */}
            <section className="section ratings-section">
                <div className="container">
                    <div className="ratings-container">
                        <div className="ratings-display">
                            <h2>Customer Ratings</h2>
                            <div className="big-score">{rating}</div>
                            <div className="stars-display">★★★★★</div>
                            <p>{ratingCount > 0 ? `Average based on ${ratingCount} reviews` : 'No ratings yet. Be the first!'}</p>
                        </div>

                        <div className="ratings-form-container">
                            <h3>Share Your Experience</h3>
                            <form onSubmit={handleRatingSubmit} className="rating-form">
                                <div className="star-input">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`star ${star <= (hoverRating || userRating) ? 'filled' : ''}`}
                                            onClick={() => setUserRating(star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <input type="text" placeholder="Your Name (optional)" className="rating-input" />
                                <textarea placeholder="Write your review (optional)" className="rating-input" rows="3"></textarea>
                                <button type="submit" className="btn btn-primary">Submit Rating</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default Home
