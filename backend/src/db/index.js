import mongoose from "mongoose";




const connectDB= async()=>{
    try {
               const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME
        });

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

        
        
    } catch (error) {
        console.error(`\n Error: ${error.message}`);
        process.exit(1); // Exit the process with failure



        
    }
}