const express = require('express')
const { postEvent } = require('../controllers/event.controllers')
const router = express.Router()


router.post('/event', postEvent)


module.exports = router

