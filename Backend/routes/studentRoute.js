import express from 'express'
import { register,login, getAllUsers,updateUser, deleteUser, findUserById } from '../controller/studentController.js'
import { verifyToken } from '../middleware/auth.js';
const router=express.Router();

router.post('/register',register)

router.post('/login',login)

router.get('/getAllUsers',getAllUsers);

router.put('/updateUser/:id',updateUser);

router.delete('/deleteUser/:id',verifyToken,deleteUser);

router.get('/getOneUSer/:id',findUserById)


export default router;