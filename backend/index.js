const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/UploadImg");
// const multer = require('multer');



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/myLoginRegisterDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  userName: {
    type: String,
    required: [true, "Please enter username"],
  },
  zipcode: {
    type: String,
    required: [true, "Please enter zipcode"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  profilePhoto: {
    type: String,
    required: [true, "Please upload picture"],
  },
});

const User = mongoose.model("User", userSchema);

//Routes
app.post("/register", (req, res) => {
  const { name, userName, zipcode, email, password, profilePhoto } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exist" });
    } else {
      const user = new User({
        name,
        userName,
        zipcode,
        email,
        password,
        profilePhoto,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});

app.use("/upload", router)

app.listen(9002, console.log("Server listening on port 9002"));
