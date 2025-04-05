require('dotenv').config();
const express = require('express');
const connectDB = require('./db/conn');
const formRoutes = require('./routes/all_routes');
const cors = require('cors');

connectDB(); // Connect to MongoDB


const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

app.use('/api', formRoutes);



const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}  );