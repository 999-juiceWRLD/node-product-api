const express = require('express');

const router = express.Router();

router
    .route('/product')
    .get()
    .post()

router
    .route('/product/:id')
    .get()
    .patch()
    .delete()

module.exports = router;
