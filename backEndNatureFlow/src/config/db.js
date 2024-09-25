import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
export const connectionsDB =async ()=>{
    try{
        // url de la base de datos 
        const url= process.env.URL_DB
// conección con la url y mongoose
      await mongoose.connect(url)
      console.log('Successful connection')
    }catch(error){
console.log(error)
//salir del proceso si algo sale mal 
process.exit(1)
    }
   

}