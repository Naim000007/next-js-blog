import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error.message}`);
    }
}


export default connect;