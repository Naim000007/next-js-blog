// In your server-side code (e.g., API route or database connection file)
const mongoose = require('mongoose');

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    try {
        await mongoose.connect(uri);
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};
