
const formularioLogin = (req,res)=>{
    res.render('auth/login',{
        autenticado: false
    })
}

const formularioRegristro = (req,res)=>{
    res.render('auth/registro',{
        pagina: "Crear cuenta"
    })
}

export{
    formularioLogin,
    formularioRegristro
}