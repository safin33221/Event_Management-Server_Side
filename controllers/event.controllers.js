const { ObjectId } = require("mongodb");
const { client } = require("../utils/db");

const postEvent = async (req, res) => {
    const data = req.body
    const event = {
        ...data,
        DateAndTime: new Date()
    }
    try {
        const eventCollection = client.db('Event-Managements').collection('events')
        const result = await eventCollection.insertOne(event)
        res.status(200).send({ message: "Event is created successfully", event: result })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors", error })
    }
}


const getEvents = async (req, res) => {
    try {
        const eventCollection = client.db('Event-Managements').collection('events')
        const result = await eventCollection.find().toArray()
        res.status(200).send({ message: "Events are get successfully", event: result })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors", error })
    }
}


const putEvents = async (req, res) => {
    try {
        const id = req.params.eventId
        const updateBookData = req.body;
        const eventCollection = client.db('Event-Managements').collection('events')
        const query = { _id: new ObjectId(id) }
        const updateDoc = {
            $set: {
                ...updateBookData
            }
        }
        const result = await eventCollection.updateOne(query, updateDoc)
        res.status(200).send({ message: "Event is updated successfully", event: result })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Errors", error })
    }
}

const deleteEvent = async (req, res) => {
    const eventCollection = client.db('Event-Managements').collection('events')

    try {
        const id = req.params.eventId
        const query = { _id: new ObjectId(id) }
        const result = eventCollection.deleteOne(query)
        res.status(201).send({ message: "Event is deleted successfully", event: result })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors", error })
    }



}
module.exports = { postEvent, deleteEvent, getEvents, putEvents }