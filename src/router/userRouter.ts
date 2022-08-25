import { Router } from "express";
import { UserController } from "../controller/userController";
import { authToken } from "../middlewares/authMiddleware";
const router = Router()

const userController = new UserController()


router.post('/signin', userController.signin)
router.post('/signup', userController.signup)

router.use(authToken)
router.post('/changepw', userController.upPassword)
router.put('/logout', userController.logout)
router.get('/', userController.allUser)

export default router