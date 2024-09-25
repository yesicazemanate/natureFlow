export const energy=async(data)=>{
      console.log(data);
       const emision= 0.233
    const electricidad= data.consumo*emision
    const total= electricidad.toFixed(2)
    console.log(total);
    return parseFloat(total)
    
}