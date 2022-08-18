import { Router } from "express";
import { UserController } from "../controller/userController";

const router = Router()

const userController = new UserController()


router.post('/signin', userController.signin)
router.post('/signup', userController.signup)
router.put('/logout', userController.authToken, userController.logout)
router.get('/', userController.authToken, userController.allUser)

export default router