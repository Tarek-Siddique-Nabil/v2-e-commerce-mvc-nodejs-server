const express = require('express');
const router = express.Router();
const Product = require('../models/search.models');

router.get('/search', async (req, res) => {
    const search = req.query.title
    console.log("🚀 ~ file: search.routes.js:7 ~ router.get ~ search:", search)
    let query = {}
    try {
        if (search.length) {
            query = {
             $text:{
                $search:search
             }
            }
        }
        res.json(query)
    } catch (error) {
        res.send([]);
    }
});

module.exports = router;
