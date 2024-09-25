import FootPrint from '../models/footprint.js'
import { transport } from '../middleware/transport.js';
import { energy } from '../middleware/energy.js';
import { CalcularGas } from '../middleware/gas.js';
import { Water } from '../middleware/water.js';
export const CalcularHuella=async(req,res)=>{
   const data= req.body
try{
const additionTransport = await transport(data.datavs.transporte)
const additionEnergy= await energy(data.datavs.energia)
const additionGas= await CalcularGas(data.datavs.gas)
const additionWater= await Water(data.datavs.water)
const addition=await Number(additionTransport)+Number(additionEnergy)+Number(additionGas)+Number(additionWater)
console.log(addition);
const dato={
   transport:[{total:additionTransport,datos:data.datavs.transporte,}],
   energy:[{total:additionEnergy, datos:data.datavs.energia}], 
   gas:[{total:additionGas,datos:data.datavs.gas} ],
   water:[{total:additionWater,datos:data.datavs.water} ],
   emissions:addition
 }
 const total= await FootPrint.create(dato)
return res.status(200).json({msg:'saved footprint', data:total})

}catch(error){
   console.log(error);
}
}
export const getFootprint= async(req, res)=>{
   try{
      const response = await FootPrint.find({})
      res.send(response)
   }catch(error){
      res.status(500).send(error)
   }
}