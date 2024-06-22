const express = require('express')
const {handleHomePage} = require('../controller/home')
const {restrictToLoggedInUserOnly} = require('../middlewares/auth')

const router = express.Router();

router.get('/', handleHomePage);

module.exports = router