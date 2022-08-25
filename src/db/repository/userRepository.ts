import { AppDataSource } from "..";
import { User } from "../entity/User";

import bcrypt from 'bcrypt'

export class UserRepo {
    #userRepo = AppDataSource.getRepository(User)

    constructor(){
        
    }

    getAllusers = async () => {
        const usersList = await this.#userRepo.find({
            relations: {posts: true}
        })

        return usersList
    }

    getUser = async (email) => {
        const user = await this.#userRepo.findOne({
            where: {email},
            select: {name: true, id: true, email:true, password: true}
        })

        return user || undefined

    }

    
    createUser = async (email, name, password) => {
        const userExistent = await this.getUser(email)
        if (userExistent) return undefined
        
        
        const newUser = new User()
        newUser.email = email
        newUser.name = name
        
        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)
        
        this.#userRepo.save(newUser)

        return newUser
    }
    
    updatePassword = async (id, password) => {


        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)


        this.#userRepo.createQueryBuilder('user')
        .update()
        .set({password: hashpassword})
        .where('id = :id', {id})
        .execute()

    }


    getUserById = async (userId) => {
        const user = await this.#userRepo.findOne({
            where: {id: userId},
            select: {name: true, id: true, email:true, password: true}
        })

        return user || undefined
    }

}