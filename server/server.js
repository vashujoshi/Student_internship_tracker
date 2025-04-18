require('dotenv').config();
const express = require('express');
const connectDB = require('./db/conn');
const formRoutes = require('./routes/all_routes');
const authRoutes = require('./routes/auth_routes');
const protected=require('./routes/protected/ccpd-dashboard');
const otproutes = require('./routes/otp_routes');
const cors = require('cors');
const otp = require('./models/otp');

connectDB(); // Connect to MongoDB


const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

app.use('/api', formRoutes);
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/protected', protected); // Protected routes
app.use('/api/otp',otproutes); // OTP routes


const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}  );