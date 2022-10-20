if(process.env.NODE_ENV !== 'production'){
   require('dotenv').config()
}

// import express from the express library
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
// hook the index file from router dir
const indexRouter = require('./routes/index')




// set our view engine
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
// define a layout to use it everywhere in the project 
app.set('layout','layouts/layout')
// tell the app we are gonna use expressLayouts
app.use(expressLayouts)
// tell where our public files are
app.use(express.static('public'))



// Note the way you place your code does matter here,see to it that this block of code is after the initialization of the express modules
const mongoose = require('mongoose')
const { use } = require('./routes/index')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db= mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log('connected to mongoose'))


app.use('/',indexRouter)

// pull from the env variable 
app.listen(process.env.PORT || 3000)

