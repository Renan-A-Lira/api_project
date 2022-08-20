import { Router } from "express";
import { PostController } from "../controller/postController";
import { authToken } from "../middlewares/authMiddleware";

const router = Router()

const postController = new PostController()

router.use(authToken)
router.put('/update/:id', postController.update)
router.delete('/delete/:id', postController.delete)
router.post('/create', postController.create)
router.get('/', postController.getPostByUser)


export default router