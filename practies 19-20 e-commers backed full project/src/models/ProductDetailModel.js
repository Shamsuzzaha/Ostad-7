const mongoose=require('mongoose');

// ------Product details structure-------
const DataSchema=mongoose.Schema({
        img1:{type:String,required:true},
        img2:{type:String},
        img3:{type:String},
        img4:{type:String},

        des:{type:String,required:true},
        color:{type:String,required:true},
        size:{type:String,required:true},

        productID:{type:mongoose.Schema.Types.ObjectId,required:true},

    },
    {timestamps:true,versionKey:false}
)
const ProductDetailsModel=mongoose.model('productdetails',DataSchema)
module.exports=ProductDetailsModel