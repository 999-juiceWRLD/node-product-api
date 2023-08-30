const express = require('express');
const Product = require('../models/productModel');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if (!product) {
            res.status(404).json({
                message: "there's no such element. try with another id."
            })
        } else {
            res.status(200).json({ message: "it's ok" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ message: err.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({
                message: "there's no such element. try with another id."
            })
        } else {
            res.status(200).json({
                message: "element is successfully deleted."
            })
        }
    } catch (err) {
        console.log(err.message);
        res.status(404).json({ message: err.message });
    }
}
