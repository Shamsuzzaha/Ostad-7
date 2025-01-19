const mongoose=require('mongoose');

// --------Categories list structure----
const DataSchema=mongoose.Schema({
        categoryName:{type:String,unique:true,required:true},
        categoryImg:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const CategoryModel=mongoose.model('categories',DataSchema)
module.exports=CategoryModel