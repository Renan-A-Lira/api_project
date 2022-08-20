import { AppDataSource } from "..";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

interface params {
    text?: string,
}

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

    deletePost = async (id, userId) => {

        const post = await this.#getPostByUserId(id, userId)

        if (!post) return null

        this.#postRepo.remove(post)

        return post
    }

    updatePost = async (id, userId, params: params) => {
        const post = await this.#getPostByUserId(id, userId)

        if (!post) return null

        this.#postRepo.createQueryBuilder('post')
        .update()
        .set({...params})
        .where('id = :id', {id})
        .execute()

        return post

    }

    getPosts = async (userId) => {

        if (!userId) return []

        const posts = await this.#postRepo.find({
            where: {user: {id: userId}}
        })

        return posts
    }

    #getPostByUserId = async (id, userId) => {
        const post = await this.#postRepo.findOne({
            where: {id, user: {id: userId}}
        })

        return post
    }

}