const express = require('express')
const { postEvent, deleteEvent, getEvents } = require('../controllers/event.controllers')
const router = express.Router()


router.post('/event', postEvent)
router.get('/event', getEvents)
router.delete('/event/:id', deleteEvent)


module.exports = router

