const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()

// connect our db
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://LorraineA8:Lorraine123@cluster0.4iooxhk.mongodb.net/test?retryWrites=true&w=majority", () => console.log('DB is successfully connected'))

// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)

// start our server
app.listen(5000, () => console.log('Server has been started successfully'))

// server is on port 5000, client is on port 3000,
// we are going to get a cors ERROR!!, but cors() removes that's error