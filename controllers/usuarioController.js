import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'
const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: "Iniciar sesión"
    })
}

const formularioRegristro = (req, res) => {
    res.render('auth/registro', {
        pagina: "Crear cuenta"
    })
}

const registrar = async (req, res) => {
    //validación
    await check('nombre').notEmpty().withMessage("El nombre no puede ir vacio").run(req)
    await check('email').isEmail().withMessage("No parece un email").run(req)
    await check('password').isLength({ min: 6 }).withMessage('El password debe de ser de al menos 6 caracteres ').run(req)
    await check('repetir_password').equals('password').withMessage('Los passwords no son iguales').run(req)

    let resultado = validationResult(req)
    
    // verificar que el resultado este vacio
    if(!resultado.isEmpty()){
        //errores
        return res.render('auth/registro', {
            pagina: "Crear cuenta",
            errores: resultado.array()
        })
    }
    
   

    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        pagina: "Recupera tu acceso a bienes raices"
    })
}

export {
    formularioLogin,
    formularioRegristro,
    formularioOlvidePassword,
    registrar
}