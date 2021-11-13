const express = require('express');
const dbPool = require('../config/query')
var router = express.Router();
router.get('/',async(req,res) =>{
   try {
       const response = await dbPool.query('select * from book_store');
       res.status(200).json(response.rows)
   } catch (error) {
    res.status(400).json({message: error})
   }
    
})

module.exports = router