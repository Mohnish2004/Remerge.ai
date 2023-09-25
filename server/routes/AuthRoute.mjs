import {Signup} from "../Controllers/AuthController.mjs"
import {Login} from "../Controllers/AuthController.mjs"
import express from "express";

const router = express.Router();

router.post('/signup', Signup)
router.post('/login', Login)
// router.post('/',userVerification)

export default router; 