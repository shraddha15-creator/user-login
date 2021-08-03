const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.listen(5000, console.log('Server listening on port 5000'))

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log('DB connected')
})

const userSchema = new mongoose.Schema({
    name: String, 
    userName: String, 
    email: String, 
    password: String, 
})

const User = mongoose.model("User", userSchema)

//Routes
app.post("/register", (req, res) => {

    const { name, userName, email, password } = req.body
    const user = new User({
        name, 
        email, 
        password
    })
    user.save( err => {
        if(err){
            res.send(err)
        }else{
            res.send({ message: "Successfully Registered" })
        }
    })
})

app.listen(9002, console.log('Server listening on port 9002'))