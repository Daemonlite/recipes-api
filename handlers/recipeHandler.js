const Recipe = require("../models/recipeSchema");
const asyncHandler = require('express-async-handler')


const getRecipes = asyncHandler(
    async (req,res) => {
        const foods = await Recipe.find({}).exec()
        if(!foods.length){
            return res.status(404).json({message:"No recipes found"})
        }else {
            res.status(200).json(foods)
        }
    }
)

const createRecipes =  asyncHandler(
    async (req, res) => {
        const { foodName, image, ingredients, instructions, otherInfo } = req.body;
      
        if (!foodName || !image || !ingredients || !instructions) {
          res.status(400);
          throw new Error("please add all fields");
        }
      
        const recipe = await Recipe.create({
          foodName,
          image,
          ingredients,
          instructions,
          otherInfo,
      
        })
        if (recipe){
          return res.status(201).json(recipe)
        }else{
          return res.status(400).json({message:"recipe creation failed"})
        }
      }
)

module.exports = {
    getRecipes,
    createRecipes
}
