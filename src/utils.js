import {dirname} from 'path'
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt'
import MongoStore  from 'connect-mongo'
import { connectionString } from './config/connection.js'

export const __dirname=dirname(fileURLToPath(import.meta.url))


export const hashPassword=(password)=>bcrypt.hashSync(password,bcrypt.genSaltSync(10))

export const isValidPassword=(user,password)=>bcrypt.compareSync(password,user.password)


export const mongoOption={
    store:MongoStore.create({
        mongoUrl:connectionString,
        // crypto:{
        //     secret:'1234'
        // }
    }),
        secret:'1234',
    resave:false,
    saveUninitialized:false,
    cookie:{
    maxAge:60000
}
}