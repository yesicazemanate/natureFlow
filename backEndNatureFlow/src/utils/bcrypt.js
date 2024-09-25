import bcrypt from 'bcrypt'
const encryPassword= async(password)=>{
    // genera un hasche unico aleatorio
    const salt= await bcrypt.genSalt(10)
    //encriptamos la contraseña de manera segura
    const encry= await bcrypt.hash(password,salt)
    return encry
}
const comparePassword = async(entryPassword, password)=>{
    // con compare comparamos la contraseña que se guardo encriptada en la base de datos con la que envia el usuario 
    return await bcrypt.compare(entryPassword, password)
}
// exportamos funciones 
export {
    comparePassword,
    encryPassword
}