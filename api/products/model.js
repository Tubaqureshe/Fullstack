const {Schema, model} =require('mongoose')

const ProductSchema = new Schema({
    title : {
        type : String,
        required : true
    }
    ,
    price : {
        type : Number,
        required : true
    }
    ,
    description : {
        type : String,
        required : true

    }
    ,
    brand : {
        type : String,
        required : true

    }
    ,
    category : {
        type : String,
        required :true
    }
    ,
    thumbnail : {
        type : String,
        required : true
    }
    ,
    images : {
        type : Array,
        required : true
    }
    
})


const products = model('product',ProductSchema)
module.exports = products