const express = require('express');
const router = express.Router();
const Product = require('../models/search.models');

router.get('/search', async (req, res) => {
  const search = req.query.title;

  try {
    const result = await Product.aggregate([
      {
        $search: {
          index: 'default',
          autocomplete: {
            query: search,
            path: 'title',
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
    ]);

    res.status(200).send(result);
  } catch (error) {
    res.send([]);
  }
});

module.exports = router;
