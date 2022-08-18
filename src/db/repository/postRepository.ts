import { AppDataSource } from "..";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

export class PostRepo {
        #postRepo = AppDataSource.getRepository(Post)
        #userRepo = AppDataSource.getRepository(User)

        limit = 10

    constructor() {

    }

    createPost = async (text, userId) => {
        
        const user = await this.#userRepo.findOne({
            where: {id: userId}
        })
        if (!user) return null

        const post = new Post()
        post.text = text
        post.user = user

        this.#postRepo.save(post)

        return post
    }

    getPosts = async (userId) => {

        if (!userId) return []

        const posts = await this.#postRepo.find({
            where: {user: {id: userId}}
        })

        return posts
    }

}