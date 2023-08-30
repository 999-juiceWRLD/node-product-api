const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router();
router.use(express.json());

router
    .route('/product')
    .get(productController.getAllProducts)
    .post(productController.postProduct)

router
    .route('/product/:id')
    .get()
    .patch()
    .delete()

module.exports = router;
