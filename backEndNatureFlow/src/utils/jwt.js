import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
/// generamos el token 
const generateToken = (user)=>{
    // creamos un objeto con la informacion que se incluye en el token 
    const payload={
        id: user._id,
        correo: user.email
    }
    // aqui convertimos el objeto en un token jwt con la paralabra secreta firmamos y expiresIn me dice que el token expirara en 1 dia
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1d'})
} 
const verifyToken=(token)=>{
    try{
        // aqui se verifica el token que llega por medio de la clave secreta si ha sido firmada por esta misma  
const isVerify= jwt.verify(token, process.env.JWT_SECRET)
return isVerify
    }catch(error){
        console.error('token verification failed', error)
        return null
    }
}
export {
    generateToken,
    verifyToken
}