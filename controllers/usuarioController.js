
const formularioLogin = (req,res)=>{
    res.render('auth/login',{
        autenticado: false
    })
}

const formularioRegristro = (req,res)=>{
    res.render('auth/registro',{
    
    })
}

export{
    formularioLogin,
    formularioRegristro
}