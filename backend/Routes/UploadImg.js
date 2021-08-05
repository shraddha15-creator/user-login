const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads")
    },
    filename: (req, file, cb) =>{
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({storage: storage});
  const router = express.Router();

  router.post("/profilePic", upload.single('profilePic'), async (req, res) => {

      const uploadedImg = await imgModel.create(req.file);

      console.log(req.file);
      res.status(200).json({
          status: 'success',
          data: uploadedImg
      })
  })

  module.exports = router;