const express = require('express');

const router = express.Router();

router.route("/")
    .get(getAllUser)
    .post(createUser)

module.exports = router;