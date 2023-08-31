import { UserModel } from "./model/user.model.js";
import { hashPassword,isValidPassword } from "../utils.js";
import MongoDao from "./mongo.dao.js";


export default class UserDaoMongo extends MongoDao{
   constructor(){
      super(UserModel);
   }
    async register(user){
     try {
      console.log("entre register dao")
        const {email}=user;
        const userExist=await UserModel.findOne({email:email})
        if(!userExist){
            const newUser=await UserModel.create({...user,password:hashPassword(user.password)})
            return newUser;
        }else return false;
     } catch (error) {
        console.log(error);
     }       

    }
    async login(user){
     try {
      console.log("entre al userdao");
        const {email,password}=user
        console.log(email);
        const userExist=await this.getByEmail(email)
        console.log("userExist dao",userExist);
        //console.log("login desde daos user",userExist);
        if(userExist){
         const validPass=isValidPassword(userExist,password);
        //console.log("valid pass",validPass);
         if(!validPass) return false
         else return userExist
      } else return false;
     } catch (error) {
        console.log(error);
     }   
    }
    async getByEmail(email){
      try {
         const emailUser=UserModel.findOne({email})
         if(!emailUser)return false;
         else return emailUser
      } catch (error) {
         console.log(error);
      }
    }
}