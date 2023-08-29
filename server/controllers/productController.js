const express = require('express');
const Product = require('../models/productModel');

const app = express();
app.use(express.json());
