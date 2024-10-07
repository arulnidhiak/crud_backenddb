const express = require("express");
require('dotenv').config()
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated now");
});


mongoose.connect(process.env.MONGO_UI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log('listening to port', process.env.PORT,' & db')
        })

    })
    .catch((error)=>{
        console.log(error)
    })
