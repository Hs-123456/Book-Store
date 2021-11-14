const express = require('express');
const dbPool = require('../config/query')
var router = express.Router();
router.post('/create', async function(req, res){
    try {
        const response = await dbPool.query(`insert into user_detail(username,email,phone_number,pswrd)
        values ('${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.password}')`)
        if(response.rows){
            res.status(201).json({
                message: "User create Successfully"
            })
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router