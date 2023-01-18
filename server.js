const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT
const connectDb = require('./database/connect')



connectDb()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/recipes',require('./routes/recipeRoutes'))


app.listen(port,()=>console.log(`SERVER ACTIVE ON PORT ${port}`))