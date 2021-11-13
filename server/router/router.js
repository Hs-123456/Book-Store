const express =  require('express');
const router = express.Router();
const bookStore = require('../controller/book_store')
const user = require('../controller/user')
router.use('/book-store',bookStore)
router.use('/User',user)
module.exports = router