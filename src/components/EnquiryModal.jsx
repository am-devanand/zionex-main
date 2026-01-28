import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './EnquiryModal.css'

function EnquiryModal({ isOpen, onClose, type = 'furniture', initialProduct = '' }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        productType: initialProduct || '',
        location: ''
    })

    useEffect(() => {
        if (initialProduct) {
            setFormData(prev => ({ ...prev, productType: initialProduct }))
        }
    }, [initialProduct])

    const furnitureOptions = [
        'Home Furniture', 'Office Furniture', 'Banquet and Restaurant',
        'Garden Furniture', 'Hospital Furniture', 'Industrial Furniture', 'School and Institutional'
    ]

    const materialOptions = [
        'Plywood', 'MDF', 'Particle Board', 'WPC Boards', 'PVC Boards',
        'Doors', 'Mica', 'Laminates', 'Veneers', 'Wallpapers', 'Design Stone', 'Fabrics'
    ]

    const options = type === 'furniture' ? furnitureOptions : materialOptions

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
        } catch (err) { console.error(err) }

        const waMessage = `*New Enquiry*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AProduct: ${formData.productType}%0ALocation: ${formData.location}`
        window.open(`https://wa.me/919843227827?text=${waMessage}`, '_blank')
        window.location.href = `mailto:zionexfurniture@gmail.com?subject=Enquiry from ${formData.name}&body=${waMessage}`

        onClose()
        setFormData({ name: '', phone: '', productType: '', location: '' })
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <div className="modal-wrapper">
                        <motion.div
                            className="modal-container"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <button className="close-icon" onClick={onClose} aria-label="Close modal">×</button>
                            <h2 className="classic-title">CLASSIC ENQUIRY FORM</h2>
                            <p className="form-description">
                                Please fill out the form below to get in touch with our team.
                            </p>

                            <form onSubmit={handleSubmit} className="split-form">
                                <div className="input-group">
                                    <span className="input-icon">👤</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <span className="input-icon">📞</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>

                                <div className="input-group">
                                    <span className="input-icon">▼</span>
                                    <select name="productType" value={formData.productType} onChange={handleChange} required>
                                        <option value="" disabled>Please select product</option>
                                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>

                                <div className="input-group">
                                    <span className="input-icon">📍</span>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="submit-btn-classic">SUBMIT</button>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )

    return createPortal(modalContent, document.body)
}

export default EnquiryModal
