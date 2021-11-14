const express = require('express');
const dbPool = require('../config/query')
var router = express.Router();
router.get('/get-all-books',async(req,res) =>{
   try {
       const response = await dbPool.query('select * from book_store');
       res.status(200).json(response.rows)
   } catch (error) {
    res.status(500).json({message: error.message})
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
        res.status(500).json({message: error.message})
    }
})

router.get('/book-filter',async(req, res) =>{
    try {

        let filterBooksArray = [];
        const response = await dbPool.query('select * from book_store');
        response.rows.forEach(element => {
                if(0 < element.book_name.search(req.query.searchBookByName)){
                    filterBooksArray.push(element)
                
                }
        });
        if(response){
            res.status(200).json({
                filterBooks: filterBooksArray
            })
        }
        
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/post-books', async(req,res) =>{
      try {

        var query = `insert into book_store (book_name,author,book_price,image_url,book_description)
        values
        ('${req.body.bookName}','${req.body.authorName}','${req.body.price}','${req.body.imageUrl}','${req.body.bookDescription}')`
    
        const response = await dbPool.query(query)
        if(response){
                res.status(200).json({
                    message: "Post Books Successfully"
                })
        }
      } catch (error) {
        res.status(500).json({message: error.message})
      }
})

module.exports = router