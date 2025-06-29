const { ObjectId } = require("mongodb");
const { client } = require("../utils/db");

const postEvent = async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        const eventCollection = client.db('Event-Managements').collection('events')
        const result = await eventCollection.insertOne(data)
        res.status(200).send({ message: "Event is created successfully", event: result })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors", error })
    }
}


const deleteEvent = async (req, res) => {
    const eventCollection = client.db('Event-Managements').collection('events')

    try {
        const id = req.params.id
        const query = { _id: new ObjectId(id) }
        const result = eventCollection.deleteOne(query)
        res.status(201).send({ message: "Event is deleted successfully", event: result })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors", error })
    }



}
module.exports = { postEvent, deleteEvent }