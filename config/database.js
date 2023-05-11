require('dotenv').config()
const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI



const db = mongoose.connection

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = db