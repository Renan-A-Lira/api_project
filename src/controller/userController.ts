import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { UserRepo } from "../db/repository/userRepository";


export class UserController {
    

    userRepo = new UserRepo()

    constructor() {
        
    }

    signin = async (req: Request, res: Response) => {
        const {email, password} = req.body

        const user = await this.userRepo.getUser(email)

        if(user) {

            const validPassword = await bcrypt.compare(password, user.password)
            if (validPassword) {

                const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: '1d'})
                

                return res.json({auth: true, token})
            } else {

                return res.status(401).json({message: "senha incorreta"})
            }

            
        } else {

            return res.status(401).json({message: "este usuario não existe"})
        }

    }

    signup = async (req: Request, res: Response) => {
        const {email, name, password} = req.body
        const user = await this.userRepo.createUser(email, name, password)

    
        if (!user) return res.status(401).json({'message': 'este email já existe'})
        
        const token = jwt.sign({id: user.id}, process.env.SECRET, {expiresIn: 5000})
        return res.json({auth: true, token})
    }

    logout = async (req: Request, res: Response) => {
        const authHeader = req.headers["authorization"];

        
        return res.json({message: "você foi desconectado"})

    }

    allUser = async (req:Request, res: Response) => {
        const usersList = await this.userRepo.getAllusers()

        return res.status(200).json(usersList)
    }


    authToken = (req, res: Response, next) => {
        const authHeader = req.headers['authorization']
        const token = authHeader

        if (token == null) return res.sendStatus(401) 

        jwt.verify(token, process.env.SECRET as string, (err: any, user: any) => {
            console.log(err)
        
            if (err) return res.sendStatus(403)
        
            req.user = user
        
            next()
        })

    }
}