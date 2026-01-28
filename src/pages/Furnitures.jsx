import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EnquiryModal from '../components/EnquiryModal'
import './Products.css'

function Furnitures() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')

    const openEnquiry = (productName) => {
        setSelectedProduct(productName)
        setModalOpen(true)
    }

    const products = [
        { title: 'Home Furniture', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600', type: 'Residential' },
        { title: 'Office Furniture', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', type: 'Commercial' },
        { title: 'Banquet & Restaurant', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600', type: 'Hospitality' },
        { title: 'Garden Furniture', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600', type: 'Outdoor' },
        { title: 'Hospital Furniture', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600', type: 'Specialized' },
        { title: 'Industrial Furniture', img: 'https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?auto=format&fit=crop&q=80&w=600', type: 'Industrial' },
        { title: 'School & Institutional', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600', type: 'Institutional' }
    ]

    return (
        <div className="page-container">
            <section className="page-header">
                <div className="container">
                    <div className="header-flex">
                        <div>
                            <h1>Our Furniture Collection</h1>
                            <p>Timeless designs for every space</p>
                        </div>
                        <button className="btn btn-primary" onClick={() => openEnquiry('General Furniture Enquiry')}>
                            Enquire for Furnitures
                        </button>
                    </div>
                </div>
            </section>

            <section className="section gallery-section">
                <div className="container">
                    <div className="products-grid">
                        {products.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="product-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className="product-image">
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                    <div className="overlay">
                                        <button className="btn btn-secondary center-centered-btn" onClick={() => openEnquiry(item.title)}>
                                            Enquire
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <span className="product-type">{item.type}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <EnquiryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type="furniture"
                initialProduct={selectedProduct}
            />
        </div>
    )
}

export default Furnitures
