import Challenge from '../models/challenge.js'

export const createChallenge=async(req, res)=>{
   const data = req.beforeDestroy() 
      try{
const response = Challenge.create(data)
res.status(200).send('successful registration', response)
      }catch(error){
         console.log(error);
      }
   }
