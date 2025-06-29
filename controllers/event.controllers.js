const { client } = require("../utils/db");

const postEvent = async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        const eventCollection = client.db('Event-Managements').collection('events')
        const result = await eventCollection.insertOne(data)
        res.status(201).send({ message: "Event is created successfully", event: result })
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Errors" })
    }
}

module.exports = { postEvent }