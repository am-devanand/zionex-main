import React, { useState } from 'react'
import { motion } from 'framer-motion'
import EnquiryModal from '../components/EnquiryModal'
import './Materials.css'

function Materials() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState('')

    const openEnquiry = (productName) => {
        setSelectedProduct(productName)
        setModalOpen(true)
    }

    const sections = [
        {
            title: 'Core Structural Elements',
            items: ['Plywood', 'MDF', 'Particle Board', 'WPC Boards', 'PVC Boards', 'Doors']
        },
        {
            title: 'Surface Finishes',
            items: ['Laminates', 'Veneers', 'Wallpapers', 'Design Stone', 'Mica']
        },
        {
            title: 'Decorative Items',
            items: ['Fabrics', 'Lighting', 'Art']
        }
    ]

    return (
        <div className="page-container materials-page">
            <section className="page-header custom-header">
                <div className="container">
                    <h1>Interior Materials</h1>
                    <p>Premium raw materials for exquisite interiors</p>
                </div>
            </section>

            <div className="container materials-container">
                {sections.map((section, secIndex) => (
                    <div key={section.title} className="material-section">
                        <h2 className="category-title">{section.title}</h2>
                        <div className="button-grid">
                            {section.items.map((item, index) => (
                                <motion.button
                                    key={item}
                                    className="material-btn"
                                    onClick={() => openEnquiry(item)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                        <hr className="section-divider" />
                    </div>
                ))}
            </div>

            <EnquiryModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type="material"
                initialProduct={selectedProduct}
            />
        </div>
    )
}

export default Materials
