const mongoose=require('mongoose');
const { Schema } = mongoose;
const StudentSchema=new Schema(
    {
        Name:{type:String,required:true},
        email:{type:String,required:true,},
        roll:{type:String,required:true,unique:true},
        education:{type:String,},
        address:{type:String},
        mobileNumber:{type:Number,},
        registrationDate:{type:Date,},
        className:{type:String},
        
    }  
)
module.exports=mongoose.model('StudentList',StudentSchema);