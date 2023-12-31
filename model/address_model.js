const mongoose=require('mongoose');
const schema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    mo_no:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    village:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
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

const address=mongoose.model('address',schema);
module.exports=address;