import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidbar } from '../components/sidbar'
import { Button } from '@material-tailwind/react'
import { CardHuella } from '../components/cardHuella'
import axios from 'axios'
export const VerRegistroHuella = () => {
   const navigate = useNavigate()
  

   const handleClick = async()=>{
      navigate('/calculadora')
   }
  
  return (
    <>
    <div className='flex -flex-row'>
<Sidbar/>
<div className='flex flex-col'>
   <Button className='bg-light-green-700' onClick={handleClick}>Calcular Huella</Button>

<div className='flex flex-wrap justify-center gap-6'>
<CardHuella/>
</div>
</div>
    </div>
    </>
  )
}
