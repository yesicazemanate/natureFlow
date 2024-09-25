import React, { useState } from 'react'
import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
 } from "@material-tailwind/react";
export const Transport = ({ vehiculo, setVehiculo, tipoCombustible, setTipoCombustible, distancia, setDistancia,numeroDias, setNumeroDias, setTipoTransporte, setEnergy, setTransport}) => {

   const [isCocheSelected, setIsCocheSelected] = useState(false);
   const [isPublicSelected, setIsPublicSelected]= useState()
   const handleCheckboxChange = ( value) => {
      setIsCocheSelected(!isCocheSelected); 
      setVehiculo(value)
  };
  const handleCheckboxChangePublico = () => {
   setIsPublicSelected(!isPublicSelected); 
   setVehiculo('publico');
   setTipoTransporte('autobus')
};
const handleClik= ()=>{
   setEnergy(true)
   setTransport(false)
}

  return (
  <>
   <Card className="mt-6 w-96">
   <Typography variant="h4" color="blue-gray">
      Transporte
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            vehiculo utilizado en tu dia a dia 
          </Typography>
         <Checkbox value={'coche'} onChange={(e)=>handleCheckboxChange(e.target.value)}

         label={
            <Typography >Coche</Typography>
         }
         />
         {isCocheSelected && (
                <div>
                    <Checkbox value={'gasolina'} onChange={(e)=>setTipoCombustible(e.target.value)}label={
                     <Typography>Gasolina</Typography>
                    } />
<Checkbox label={
   <Typography value={'diesel'} onChange={(e)=>setTipoCombustible(e.target.value)}>Diesel</Typography>
}/>
                </div>
            )}
         <Checkbox
         onChange={handleCheckboxChangePublico}
         label={
            <Typography>Publico</Typography>
         }
         />
         {
            isPublicSelected&&(
               <Typography>Autobus</Typography>
            )
         }
         <Checkbox
         value={'bicicleta'} onChange={(e) => setVehiculo(e.target.value)}
         label={
            <Typography>Bicicleta</Typography>
         }
         />
         <Checkbox
         value={'camina'} onChange={(e) => setVehiculo(e.target.value)}
         label={
            <Typography>Camina</Typography>
         }
         />
        
          <Typography variant="h6" color="blue-gray" className="-mb-3">
         Distancia
          </Typography>
          <Input
            size="lg"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Número de dias
          </Typography>
          <select 
           value={numeroDias}
           onChange={(e) => setNumeroDias(e.target.value)}
          className="border-t-blue-gray-200 focus:border-t-gray-900">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
       
        <Button className="mt-6 bg-light-green-700 " fullWidth onClick={handleClik}>
          siguiente
        </Button>
        
      </form>
    </Card>
  </>
  )
}
