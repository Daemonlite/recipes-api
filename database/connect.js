const mongoose = require('mongoose')


const connectDb = async (req,res) => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log('DATABASE CONNECTED')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb