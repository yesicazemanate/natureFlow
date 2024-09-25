import mongoose, { connections } from "mongoose";
export const connectionsDB = ()=>{
    const url= ''
    mongoose.connect(url)
    
}