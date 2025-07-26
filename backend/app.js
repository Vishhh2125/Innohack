import express from 'express';import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import userRoutes from './src/routes/userRoutes.js'; 
dotenv.config();


const app = express();


//middilewares

app.use(cors({
    origin:["*"],
    credentials:true
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({

    extended: true
}))


//routes

// app.use('/api/v1', userRoutes);












export default app;