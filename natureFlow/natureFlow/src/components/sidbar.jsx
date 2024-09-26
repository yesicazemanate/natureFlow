import React from 'react'
import {
   Card,
   Typography,
   List,
   ListItem,
 } from "@material-tailwind/react";

export const Sidbar = () => {
  return (
    <>
     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
        Home
        </ListItem>
        <ListItem>
       Calculadora
        </ListItem>
        <ListItem>
         Rankings
        </ListItem>
        <ListItem>
   Retos
        </ListItem>
        <ListItem>
   Crear Retos
        </ListItem>
        <ListItem>
      Invitación
       </ListItem>
        <ListItem>
          Log Out
        </ListItem>
      </List>
    </Card>
    </>
  )
}
