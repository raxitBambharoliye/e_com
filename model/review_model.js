const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const upPath='/uploads/slider';

const schema=mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    createAt:{
        type:String,
        required:true
    },
    updateAt:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        required:true
    }
})



const review=mongoose.model('review',schema);
module.exports=review;