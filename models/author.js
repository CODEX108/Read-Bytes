const mongoose = require('mongoose')

const athourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Author',athourSchema)