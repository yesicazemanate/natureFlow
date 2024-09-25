import express from 'express'
import cors from 'cors'
import { connectionsDB } from './src/config/db.js'
import dotenv from 'dotenv'
import route from './src/routes/index.js'
dotenv.config()
const app = express()
app.use(express.json())
// se crea un objeto para contener las configuraciones de los cors 
const corsOption={
    // lista de los dominios permitidos para acceder al servidor 
    origin:[' http://localhost:5173/'],
    // especifica los metodos permitidos para las solicitudes
    methods:['GET','POST', 'DELETE', 'PATCH', 'PUT'],
    //las solicitudes puedes incluir credenciales como cookies o autentificación
    credentials:true
}
// habilita cors 
app.use(cors(corsOption))
app.use('/',route)
connectionsDB()


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`working on the port ${port}`)
})