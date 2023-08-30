const express = require('express');
const Product = require('../models/productModel');

const app = express();
app.use(express.json());

exports.postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({
            message: "it's added to db successfully.",
            content: req.body
        })
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ message: err.message });
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            message: "success",
            data: product
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            message: "all the data is listed below.",
            data: products
        })
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ message: err.message });
    }
}
