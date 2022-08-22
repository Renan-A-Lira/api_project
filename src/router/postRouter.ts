import { Router } from "express";
import { PostController } from "../controller/postController";
import { authToken } from "../middlewares/authMiddleware";

import multer from 'multer'
import multerConfig from "../config/multerConfig";

const router = Router()

const postController = new PostController()

router.use(authToken)
router.put('/update/:id', postController.update)
router.delete('/delete/:id', postController.delete)
router.post('/create', multer(multerConfig).single('file') , postController.create)
router.get('/', postController.getPostByUser)


export default router