import "reflect-metadata"
import express from 'express'
import routers from './router'
import {AppDataSource} from './db'
import clc from 'cli-color'

import path from 'path'
import { pathLog } from "./middlewares/pathMiddleware"


require('dotenv').config({path: __dirname+'/.env'});

const app = express()
const port = 3000

AppDataSource.initialize()
    .then(async () => {
        
    })
    .catch((error) => console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(pathLog)
app.use(routers)

app.use(express.static(path.resolve(__dirname, '..', 'tmp')));
app.get('/', (req, res) => res.status(200).json({'message': 'ok'}))

let msg = clc.xterm(176)
app.listen(port, () => console.log(`${msg.bold('Servidor rodando')} 🚀\n ${clc.bold.italic(`http://localhost:${port}`)}`))