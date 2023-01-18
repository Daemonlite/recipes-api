const router = require('express').Router()
const {createRecipes,getRecipes,updateRecipe,deleteRecipe} = require('../handlers/recipeHandler')

router.get('/',getRecipes)
router.post('/',createRecipes)
router.put('/:id',updateRecipe)
router.delete('/:id',deleteRecipe)

module.exports = router