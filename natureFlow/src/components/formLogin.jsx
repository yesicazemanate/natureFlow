import  { useState, useEffect } from 'react'
import {
   Card,
   Input,
   Button,
   Typography,
 } from "@material-tailwind/react";
 import Cookies from 'js-cookie'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom';
export const FormLogin = () => {
  const navigate= useNavigate()
   const[email, setEmail]=useState()
   const[password, setPassword]=useState()
   const [error, setError]= useState()
   const handleSubmit=async()=>{
      try{
        const response= await axios.post('http://localhost:3000/user/login',{email,password})
        console.log(response);
        if (response.data && response.data.token) {
          Cookies.set('token', response.data.token, { expires: 7 });
          setError(false);
         
            navigate('/verhuella');
          
        } else {
          setError(true);
        }
      } catch(error) {
        setError(true);
        console.log(error);
      }
    
      
   }

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  return (
   <>
   
    <Card color="transparent" shadow={false}>
    {
    error&&(
      <>
       <Typography variant="h4" color="blue-gray" className='text-orange-900'>
     Usuario o contraseña incorrectos
      </Typography>
      </>
    )
   }
      <Typography variant="h4" color="blue-gray">
       Iniciar Sesión
      </Typography>
     
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e)=>{
         e.preventDefault()
         handleSubmit()
      }}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           email
          </Typography>
          <Input
            size="lg"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contraseña
          </Typography>
          <Input
            size="lg"
              type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
               placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        
        <Button className="mt-6 bg-light-green-700" fullWidth type='submit'>
       Iniciar Sesión 
        </Button>
       </div>
      </form>
    </Card>
   </>
  )
}
