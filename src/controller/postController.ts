import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { PostRepo } from "../db/repository/postRepository";

export class PostController {

    postRepo = new PostRepo()

    constructor(){
        
    }

    create = async (req, res) => {
        const { text } = req.body
        const userId = req.user.id


        const createPost = await this.postRepo.createPost(text, userId)

        return res.status(200).json({createPost})

    }


    


}