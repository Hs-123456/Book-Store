const express =  require('express');
const router = express.Router();
const getAllBooks = require('../controller/getAllBooks')
router.use('/get-all-books',getAllBooks)
module.exports = router