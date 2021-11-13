const express = require('express');
const dbPool = require('../config/query')
var router = express.Router();
router.get('/get-all-books',async(req,res) =>{
   try {
       const response = await dbPool.query('select * from book_store');
       res.status(200).json(response.rows)
   } catch (error) {
    res.status(400).json({message: error})
   }
    
})

router.get('/order-details', async(req,res) =>{
    try {
       const bookDetail = await dbPool.query(`select * from book_store where id = ${req.query.bookId}`);
       const userDetail = await dbPool.query(`select * from user_detail where id = ${req.query.userId}`);
       if(bookDetail && userDetail){
        res.status(200).json({
            bookDetail: bookDetail.rows,
            userDetail: userDetail.rows
        })
       }

      
        
    } catch (error) {
        res.status(400).json({message: error})
    }
})

router.get('/book-filter',async(req, res) =>{
    try {

        let filterBooksArray = [];
        const response = await dbPool.query('select * from book_store');
        response.rows.forEach(element => {
                if(0 < element.book_name.search(req.query.searchBookByName)){
                    filterBooksArray.push(element)
                    console.log(element.book_name.search(req.query.searchBookByName))
                }
        });
        if(response){
            res.status(200).json({
                filterBooks: filterBooksArray
            })
        }
        
        
    } catch (error) {
        res.status(400).json({message: error})
    }
})

module.exports = router