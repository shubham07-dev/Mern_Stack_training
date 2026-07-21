import express from 'express'
import { register } from '../controller/studentController.js'
const router=express.Router();

router.get('/register',register)

export default router;