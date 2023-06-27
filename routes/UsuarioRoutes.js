import express from 'express';
import {registrar,confirmarAsistencia} from '../controllers/UsuarioController.js';

const usuarioRouter = express.Router();

usuarioRouter.post("/", registrar);


usuarioRouter.get("/confirmar/:token",confirmarAsistencia);

export default usuarioRouter;