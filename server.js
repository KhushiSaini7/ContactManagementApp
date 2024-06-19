const express = require('express');
const dotenv = require('dotenv').config();


//rest object
const app= express();

const port=process.env.PORT|| 5000;

app.use(express.json());
app.use("/api/contacts",require("../mycontacts-backend/routes/contactRoutes"));

app.listen(5000,()=>{
    console.log('server running on port', port );
})

