import Services from "./class.services.js";
import UserDaoMongo from "../daos/user.dao.js";
import { generateToken } from "../jwt/auth.js";
import dotenv from 'dotenv'
dotenv.config()
const userDao=new UserDaoMongo()
export default class UserService extends Services{
    constructor(){
        super(userDao);
    }

    async register(user){
        try {
            console.log("register service")
            return await userDao.register(user)
        } catch (error) {
            console.log(error);
        }
    }
    async login(user){
        try {
            console.log("entre al servicio");
            const userExist=await userDao.login(user)
            console.log("userexist service",userExist);
            if(userExist)return generateToken(userExist)
            else return false
        } catch (error) {
            console.log(error);
        }
    }
}