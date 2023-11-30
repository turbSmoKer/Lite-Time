import express from 'express';
import Config from 'dotenv';
import sequelize from './db.js';
import models from './models/models.js'
const PORT = process.env.PORT


const app = express()


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('app Ok'))
    } catch (e) {
        console.log(e)
    }

}

start()