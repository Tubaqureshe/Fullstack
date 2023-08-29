const category = require('./model');

const { connect } = require('mongoose')
require('dotenv').config()


//=============All Categories==========//
const getAllCategories = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)

        const allCategories = await category.find()

        res.json({
            category: allCategories
        })

    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

//=============Category by id==========//
const getCategoryById = async (req, res) => {
    const { _id } = req.query;
    try {
        await connect(process.env.MONGO_URL)

        const category = await category.findOne({ _id })

        res.json({ category })

    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

//=============Create category==========//
const createCategory = async (req, res) => {
    const { categoryName, categoryImage } = req.body

    if (!categoryName || !categoryImage) {
        res.status(403).json({
            message: "Missing Required Field"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URL)
            const checkExisting = await category.exists({ categoryName })

            if (checkExisting) {
                res.status(400).json({
                    message: "Category Already Exists"
                })
            }

            else {
                await category.create({ categoryName, categoryImage })
                const allCategories = await category.find()

                res.json({
                    message: "DB Connected",
                    category: allCategories
                })

            }
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}

//=============Update category==========//
const updateCategory = async (req, res) => {

    const { categoryName, categoryImage } = req.body
    const { id: _id } = req.params
    const filter = { _id };
    const update = { categoryName, categoryImage };
    try {
        await connect(process.env.MONGO_URL)

     await category.findOneAndUpdate(filter, update, {
            new: true
        });

        res.json({
            message: "Success",
            category
        })

    }



    catch (error) {
        res.status(400).json({
            message: error.message
        })

    }
}

//=============Delete category==========//
const deleteCategory = async (req, res) => {
    const { id: _id } = req.params
    console.log(_id)
    try {
        await connect(process.env.MONGO_URL)
        await category.findByIdAndDelete(_id)

        res.status(200).json({
            message: "deleted Successfully",
            category
        })

    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory }