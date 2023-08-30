const express = require('express');
const Product = require('../models/productModel');

const app = express();
app.use(express.json());

exports.postProduct = async (req, res) => {
    console.log("post product is called");
    console.log(req.body)
    try {
        const product = await Product.create(req.body)
        res.status(200).json({
            message: "it's added to db successfully.",
            content: req.body
        })
    } catch (err) {
        console.log(err.message);
        res.status(404);
    }
}
