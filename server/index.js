import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Ensure files directory exists
const DATA_FILE = path.join(__dirname, 'enquiries.csv');

// Initialize CSV if not exists
if (!fs.existsSync(DATA_FILE)) {
    const header = 'Timestamp,Name,Phone,ProductDetails,Location\n';
    fs.writeFileSync(DATA_FILE, header);
}

app.post('/api/enquiry', (req, res) => {
    try {
        const { name, phone, productDetails, location } = req.body;

        // Sanitize fields to prevent CSV injection or format issues
        const safeName = name.replace(/,/g, ' ');
        const safePhone = phone.replace(/,/g, ' ');
        const safeProduct = productDetails.replace(/,/g, ' ');
        const safeLocation = location.replace(/,/g, ' ');
        const timestamp = new Date().toISOString();

        const row = `${timestamp},${safeName},${safePhone},${safeProduct},${safeLocation}\n`;

        fs.appendFileSync(DATA_FILE, row);

        console.log('New enquiry saved:', { name, productDetails });
        res.status(200).json({ message: 'Enquiry saved successfully' });
    } catch (error) {
        console.error('Error saving enquiry:', error);
        res.status(500).json({ message: 'Failed to save enquiry' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
