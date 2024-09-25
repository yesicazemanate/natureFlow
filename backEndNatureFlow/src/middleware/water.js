export const Water=async(data)=>{
   const water= (data.consumo*0.0003)
   const total= water.toFixed(2)
   return parseFloat(total)
}