import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { PostRepo } from "../db/repository/postRepository";

export class PostController {

    postRepo = new PostRepo()

    constructor(){
        
    }

    update = async (req, res) => {
        const idPost = req.params.id
        const userId = req.user.id
        const {text} = req.body

        const post = await this.postRepo.updatePost(idPost, userId, {text})

        if (!post) return res.status(404)

        return res.status(200).json(post)
    }

    delete = async (req, res) => {
        const idPost = req.params.id
        const idUser = req.user.id

        const result = await this.postRepo.deletePost(idPost, idUser)

        if (!result) return res.json({message: 'ocorreu um erro'})

        return res.status(200).json({message: "o post foi apagado com sucesso"})
    }

    create = async (req, res) => {
        const { text } = req.body
        const userId = req.user.id


        const createPost = await this.postRepo.createPost(text, userId)


        if (!createPost) return res.status(401).json({message: "o post não foi criado"})

        return res.status(200).json({createPost})

    }

    getPostByUser = async (req, res) => {
        const userId = req.user.id

        const posts = await this.postRepo.getPosts(userId)

        return res.status(200).json(posts)

    }


    


}