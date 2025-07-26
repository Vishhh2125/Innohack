import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME
        });

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        // Log the full error object for a more detailed stack trace
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;