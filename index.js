const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Load environment variables
require('dotenv').config();

// Middleware setup
app.use(cors()); //Allow cross origin requests
app.use(express.json()); //Parses incoming JSON Payload

// Routes
app.use('/api/vendors', require('./routes/venderRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Error handling middleware
// app.use(require('./middlewares/errorHandler'));

//DB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected');
    } catch(error) {
        console.log('Error occoured while connecting', error);
        process.exit(1); //Exit if DB is not connected
    }
}

//getting the port no.
const PORT = process.env.PORT || 3000;

//starting the server
app.listen(PORT, async () => {
    await connectDB(); //Establishing the connection
    console.log('Server running on the port', PORT);
})