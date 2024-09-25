import mongoose from 'mongoose'
import User from './user.js'
const footPrintShema=mongoose.Schema({
   userId:{
      type:mongoose.Schema.Types.ObjectId,
      require:true,
      ref:User
   },
   transport:{
      type:mongoose.Schema.Types.Mixed,
      require:true,
   },
   energy:{
      type:mongoose.Schema.Types.Mixed,
      require:true,
   },
   gas:{
      type:mongoose.Schema.Types.Mixed,
      require:true,
   },
   water:{
      type:mongoose.Schema.Types.Mixed,
      require:true,
   },
   emissions:{
      type:Number,
      require:true
   }

},{
   ttimestamps: true
})
const FootPrint = mongoose.model('footprint', footPrintShema)
export default FootPrint