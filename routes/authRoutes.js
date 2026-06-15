import { Router } from 'express';
import { Login, createUser } from '../controllers/authController.js';

const router=Router();



router.post("/register", createUser);
router.post("/login", Login);

export default router;