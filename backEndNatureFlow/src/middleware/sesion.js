import { verifyToken } from "../utils/jwt.js";
/// next es utlizado para pasar el control a otro middleware o ruta de cadena de manejo
export const checkJwt = (req, res, next)=>{
    try{
        // aqui intento obtener el encabezado de aujtorizacion
const jwtUser = req.headers.authorization || null;
if(!jwtUser){
    // sino lo encuentra le devuelve un no autorizado
    return res.status(401).json({message:' no token provided'})

}
// aqui hacemos esto apara solo guardar el token ya que viene 
// en formato bearer y la primer parte no nos sirve
const jwt= jwtUser.split(' ')[1]
console.log(jwt)
// aqui verificamos el token  
const verify= verifyToken(jwt)
// comprobamos el exito o no de la base de datos 
if(!verify){
    return res.status(401).json({message:'you do not have a valid login'})
}else{
    // si es valido se ejecuta este bloque
    console.log('token valid', verify)
    // aqui le decimos que siga a otros middleware 
    
    next()
}
    }catch(error){
        console.log('Error in JWT middleware',error)
        res.status(500).json({error:'server error', msg :error.message})
    }
}