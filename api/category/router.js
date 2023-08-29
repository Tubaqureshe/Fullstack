const app = require('express')
const router = app.Router()
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory  } = require('./controller')

router.get('/get-all-categories', getAllCategories )
router.get('/get-category-by-id', getCategoryById )
router.post('/create-category', createCategory )
router.put('/update-category/:id', updateCategory )
router.delete('/delete-category/:id', deleteCategory )

module.exports = router