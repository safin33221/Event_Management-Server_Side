const express = require('express')
const { postEvent, deleteEvent, getEvents, putEvents } = require('../controllers/event.controllers')
const router = express.Router()


router.post('/event', postEvent)
router.get('/event', getEvents)
router.put('/event/:eventId', putEvents)
router.delete('/event/:eventId', deleteEvent)


module.exports = router

