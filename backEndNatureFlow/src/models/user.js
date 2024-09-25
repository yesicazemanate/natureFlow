import mongoose from "mongoose";
const userShema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }, 
    password:{
        type:String,
        require:true,
    },

},{
    timestamps: true
})
const User = mongoose.model('user', userShema)
export default User