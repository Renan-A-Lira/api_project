import { Router } from "express";
import { PostController } from "../controller/postController";
import { UserController } from "../controller/userController";

const router = Router()

const postController = new PostController()
const userController = new UserController()

router.post('/create', userController.authToken, postController.create)


export default router