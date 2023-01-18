const router = require('express').Router()
const {createRecipes,getRecipes} = require('../handlers/recipeHandler')

router.get('/',getRecipes)
router.post('/',createRecipes)

module.exports = router