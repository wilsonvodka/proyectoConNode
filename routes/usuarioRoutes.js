import express from "express";
import { formularioLogin, formularioRegristro } from "../controllers/usuarioController.js";

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro',formularioRegristro )






export default router