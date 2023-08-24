import express, { json,urlencoded } from 'express';
import passport from 'passport'
import session from 'express-session';
import { mongoOption } from './utils.js';
import './config/connection.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import userRouter from './routes/user.router.js'
import viewRouter from './routes/views.router.js'
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';
const app = express();

app
    //middlewares
    .use(json())
    .use(urlencoded({extended:true}))
    .use(morgan('dev'))
    .use(express.static(__dirname+'/public'))
    .engine('handlebars',handlebars.engine())
    .set('views',__dirname+'/views')
    .set('view engine','handlebars')
    //session
     .use(cookieParser())
     .use(session(mongoOption))

    //passport
    .use(passport.initialize())
    .use(passport.session())

    //routes
    .use('/users',userRouter)
    .use('/',viewRouter)
    .listen(8080,()=>console.log("server ok,port 8008"))

