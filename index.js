import express from 'express'
import usuarioRutes from './routes/usuarioRoutes.js'

//crear app
const app = express()

//habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

//Routing
app.use('/auth', usuarioRutes);




//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})