import { AppDataSource } from "..";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

export class PostRepo {
        #postRepo = AppDataSource.getRepository(Post)
        #userRepo = AppDataSource.getRepository(User)

    constructor() {

    }

    createPost = async (text, userId) => {
        const post = new Post()

        post.text = text

        const user = await this.#userRepo.findOne({
            where: {id: userId},
            select: {id: true, email: true, name: true}
        })
        if (!user) return null

        post.user = user

        this.#postRepo.save(post)

        return post
    }

    getPosts = async (userId) => {

        const posts = await this.#postRepo.find({
            where: {user: {id: userId}}
        })

        return posts
    }

}