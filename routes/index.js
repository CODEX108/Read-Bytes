const express = require('express')
// get the router portion by calling the router function
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

// export the module
module.exports= router