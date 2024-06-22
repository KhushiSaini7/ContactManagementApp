const express = require('express');
const errorHandler = require('./middlewares/errorhandler');
const dotenv = require('dotenv').config();
const connectDb= require("../mycontacts-backend/config/dbConnection")
const contactController = require('../mycontacts-backend/controllers/contactController');

// Connect to the database
connectDb();

//rest object
const app= express();



// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api/contacts",require("../mycontacts-backend/routes/contactRoutes"));
app.use("/api/users",require("../mycontacts-backend/routes/userRoutes"));

// Error handling middleware
app.use(errorHandler);

const port=process.env.PORT|| 5000;
app.listen(5000,()=>{
    console.log('server running on port', port );
})

