const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },
    otherInfo:{
        type:String,
        required:false
    }
},{
    timestamps:true,
})
module.exports = mongoose.model('Recipe',recipeSchema)