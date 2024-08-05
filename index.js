import express from 'express'
import usuarioRutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

//Crear app
const app = express()
//conexión a la base de datos
try {
    await db.authenticate();
    console.log('conexión correcta a la base de datos')
} catch (error) {
    console.log(error)
}

//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta pública
app.use(express.static('public'))


//Routing
app.use('/auth', usuarioRutes);




//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})