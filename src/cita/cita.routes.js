import { Router } from "express";
import { check } from "express-validator";
import { saveCita } from './cita.controller.js';
import { validarCampos } from "../middlewares/validar-campos.js";


const router = Router();

router.post(
    "/",
    [

        check('email', 'Este no es un email válido').not().isEmpty(),
        check('name', 'Este no es un name válido').not().isEmpty(),
        validarCampos
    ],
    saveCita
)

export default router;