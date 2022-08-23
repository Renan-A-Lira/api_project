import { Request, Response, NextFunction } from "express"
import clc from 'cli-color'


const pathLog = (req: Request, res: Response, next: NextFunction) => {

    const colors = {
        POST: clc.xterm(84),
        GET: clc.xterm(69),
        PUT: clc.xterm(220),
        DEL: clc.xterm(9),

    }

    const {method, url } = req
    console.log(`\n${colors[method].bold(method)} ${url}`)

    next()

}

export {
    pathLog
}