const { Schema, model } = require('mongoose')

const CategorySchema = new Schema(
    {
        categoryName: {
            type: String,
            unique: true,
            required: true
        },
        categoryImage: {
            type: String,
            required: true
        }
    }
)

const category = model('category', CategorySchema)
module.exports = category