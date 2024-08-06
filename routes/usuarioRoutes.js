import express from "express";
import { formularioLogin, formularioOlvidePassword, formularioRegristro, registrar } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro',formularioRegristro )
router.post('/registro',registrar)
router.get('/olvide-password',formularioOlvidePassword )







export default router