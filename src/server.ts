import "reflect-metadata"
import express from 'express'
import routers from './router'
import {AppDataSource} from './db'

require('dotenv').config({path: __dirname+'/.env'});

const app = express()
const port = 3000

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

app.use(express.json())

app.use(routers)
app.get('/', (req, res) => res.status(200).json({'message': 'ok'}))

app.listen(port, () => console.log('Servidor rodando 🚀...'))