import mongoose from "mongoose";
const challengueShema = mongoose.Schema({
   description:{
      type:String,
      require:true
   },
   points:{
      type:Number,
      require:true
   },
   timeOut:{
      type:Number,
      require:true
   }
},{
   timestamps: true
})

const Challenge = mongoose.model('challenge', challengueShema)
export default Challenge