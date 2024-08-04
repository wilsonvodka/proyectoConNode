// const express = require('express')
import express from 'express'

//crear app
const app = express()

//Routing
app.get('/', function (req,res){
    res.send('Hola mundo en express')
})
app.get('/nosotros', function (req,res){
    res.json({msg:"hola mundo"})
})
// app.get('/render', function (req,res){
//     res.render()
// })

//definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})