const jwt = require('jsonwebtoken');
const { client } = require("../utils/db")
const bcrypt = require('bcrypt');
const postUser = async (req, res) => {
    try {
        const userData = req.body
        const userCollection = await client.db('Event-Managements').collection('users')
        const isExist = await userCollection.findOne({ email: " userData.email" })
        if (isExist) {
            return res.status(404).send({ message: "user email already registered" })
        }
        const user = {
            ...userData,
            createAT: new Date()
        }
        const hashPassword = await bcrypt.hash(userData.password, 10)
        user.password = hashPassword
        const result = await userCollection.insertOne(user)
        return res.status(201).send({ message: "user created successful", result })


    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Errors", error })
    }

}



const login = async (req, res) => {
    const { email, password } = req.body;
    const userCollection = await client.db('Event-Managements').collection('users')
    const user = await userCollection.findOne({ email })
    if (!user) return res.status(400).send({ message: "User not Found" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).send({ message: "Invalid Credential" })
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' })

    return res.status(200).send({
        token, user
    })


}

module.exports = { postUser, login }