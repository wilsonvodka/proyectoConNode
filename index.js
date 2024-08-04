const express = require('express')

//crear app
const app = express()

//Routing
app.get('/', function (req,res){
    res.send('hola mundo en express')
})

//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})