import {Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const authToken = (req, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(401)

    const token = authHeader.split(' ')[1]


    if (token == null) return res.sendStatus(401) 

    jwt.verify(token, process.env.SECRET as string, (err: any, user: any) => {
    
        if (err) return res.sendStatus(403)
    
        req.user = user
    
        next()
    })

}

export {
    authToken
}