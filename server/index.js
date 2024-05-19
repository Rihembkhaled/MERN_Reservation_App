import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { instRouter } from './routes/inst.js'


 
import { Inst } from './models/Inst.js'

import { Student } from './models/Student.js'
import { Admin } from './models/Admin.js'


// Initialize dotenv to read the .env file
dotenv.config();

const app = express();
app.use(cors({
    origin: ['http://localhost:5174'],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/auth', AdminRouter);
app.use('/student', studentRouter);
app.use('/inst', instRouter);



app.get('/dashboard',async (eq, res) => { 

    try {

        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const inst = await Inst.countDocuments()

        return res.json({ok: true, student, inst, admin})

    }catch(err) {
        return res.json(err)
    }

})

// Call the Connection function to establish the MongoDB connection
// Assuming Connection is a function exported from db.js

 // Call the Connection function to establish MongoDB connection

// Set the port, defaulting to 3000 if not set in the environment variables
const PORT = process.env.PORT || 3000;

// Start the server and add error handling
app.listen(PORT, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});
