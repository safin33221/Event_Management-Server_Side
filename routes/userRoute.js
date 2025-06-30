const express = require('express')
const { postUser, login } = require('../controllers/user.controllers')
const router = express.Router()


router.post('/user', postUser)
router.post('/login', login)

module.exports = router