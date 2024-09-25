export const transport=async(data)=>{
   console.log(data.tipoCombustible);
   if(data.vehiculo=='coche'){
      if(data.tipoCombustible=='gasolina'){
         const factorEmision = 2.31
         const consumo =(10/100)*data.distancia
         console.log(consumo);
         const transporte = (consumo*factorEmision)
         console.log(transporte);
         const total = transporte.toFixed(2)
         const totalFinal = total*data.numeroDias
           return totalFinal
         }
       
      else if(data.tipoCombustible=='diesel'){
         const factorEmision = 2.68
         const consumo =(8/100)*data.distancia
        const  transporte = (consumo*factorEmision)
          const total = transporte.toFixed(2)
          const totalFinal= total*data.numeroDias
          return totalFinal
      }}
   
   else if(data.vehiculo== 'publico'){
      if(data.tipoVPublico=='autobus'){
const emision=0.071
const transporte= data.distancia* emision
const total = transporte.toFixed(2)
const totalFinal= total*data.numeroDias
return totalFinal
      
   }}
   else if(data.vehiculo== 'bicicleta'){
      const produccion= 250
      const dias = 5*365
      console.log(dias);
      const total=produccion/dias
      const totalF= parseFloat(total.toFixed(3))
      const totalFinal= totalF*data.numeroDias
return totalFinal
   }

}
