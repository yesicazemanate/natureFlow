import {useState}from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export const FormRegister = () => {
  const navigate= useNavigate()
  const [name, setName] = useState()
  const [lastname, setLastname]= useState()
  const [email, setEmail]= useState()
  const [password, setPassword]=useState()
  const handleSubmit=async()=>{
    try{
      const response= await axios.post('http://localhost:3000/user/register',{name,lastname,email,password})
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
  const handle=()=>{
    navigate('/')
  }
  
  return (
    <>
 <Card color="transparent" shadow={false} className='w-2/4'>
      <Typography variant="h4" color="blue-gray">
     Registro
      </Typography>
      
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit()
      }
       }>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Nombre
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Apellido
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            value={email}
             onChange={(e)=>setEmail(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Contraseña
          </Typography>
          <Input
            type="password"
            size="lg"
            value={password}
            placeholder="********"
            onChange={(e)=>setPassword(e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
       
  <Button
  className='bg-light-green-700' type='submit' >
            Registrarse
  </Button>
      </form>
  <button onClick={handle}>¡Ya tienes una cuenta inicia sesión!</button>
    </Card>
    </>
  )
}
