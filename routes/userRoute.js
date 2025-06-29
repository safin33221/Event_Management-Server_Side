const express = require('express')
const { postUser } = require('../controllers/user.controllers')
const router = express.Router()


router.post('/user', postUser)

module.exports = router