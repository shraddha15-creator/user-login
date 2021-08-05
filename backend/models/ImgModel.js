  
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    originalname:String,
    destination:String,
    mimetype:String,
    path:String
    
})

module.exports = mongoose.model('images',userSchema);