const express = require('express')
const { postEvent, deleteEvent } = require('../controllers/event.controllers')
const router = express.Router()


router.post('/event', postEvent)
router.delete('/event/:id', deleteEvent)


module.exports = router

