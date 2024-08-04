import express from 'express'
import usuarioRutes from './routes/usuarioRoutes.js'

//crear app
const app = express()

//Routing
app.get('/', usuarioRutes)



//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})