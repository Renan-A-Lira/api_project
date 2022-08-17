import { AppDataSource } from "..";
import { Post } from "../entity/Post";
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

export class PostRepo {
        postRepo = AppDataSource.getRepository(Post)
        userRepo = AppDataSource.getRepository(User)

    constructor() {

    }

    createPost = async (text, userId) => {
        const post = new Post()

        post.text = text
        post.user = await this.userRepo.findOneBy({id: userId})

        this.postRepo.save(post)
    }

}