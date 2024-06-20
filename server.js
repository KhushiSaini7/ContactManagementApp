const express = require('express');
const errorHandler = require('./middlewares/errorhandler');
const dotenv = require('dotenv').config();
const connectDb= require("../mycontacts-backend/config/dbConnection")

connectDb();
//rest object
const app= express();

const port=process.env.PORT|| 5000;

app.use(express.json());
app.use("/api/contacts",require("../mycontacts-backend/routes/contactRoutes"));
app.use(errorHandler);

app.listen(5000,()=>{
    console.log('server running on port', port );
})

