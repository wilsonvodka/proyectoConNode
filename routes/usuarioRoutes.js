import express from "express";

const router = express.Router();

// router.get('/', function (req,res){
//     res.send('Hola mundo en express')
// })
// router.post('/', function (req,res){
//     res.json({msg:"respuesta de tipo post"})
// })

router.route('/')
    .get(function(req,res){
        res.send('Hola mundo en express')
    })
    .post(function(req,res){
        res.json({msg:"respuesta de tipo post"})
    })



export default router