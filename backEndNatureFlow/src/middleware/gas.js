export const CalcularGas=(data)=>{
   const gas= (data.consumo*1.98)
   const total= gas.toFixed(2)
   return parseFloat(total)
 }