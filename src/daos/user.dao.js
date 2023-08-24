import { UserModel } from "./model/user.model.js";
import { hashPassword,isValidPassword } from "../utils.js";


export default class UserModelDao{
    async register(user){
     try {
        const {email}=user;
        const userExist=await UserModel.findOne({email:email})
        console.log("user register dao",userExist);
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
        const {email,password}=user
        const userExist=await UserModel.findOne({email})
        //console.log("login desde daos user",userExist);
        if(userExist){
         const validPass=isValidPassword(userExist,password);
        console.log("valid pass",validPass);
         if(!validPass){return false}
         else {return userExist}
      } else return false;
     } catch (error) {
        console.log(error);
     }   
    }

    async getById(id){
      try {
         const user=UserModel.findById(id)
         if(!user)return false;
         return user;
      } catch (error) {
         console.log(error);
      }
    }
    async getByEmail(email){
      try {
         const emailUser=UserModel.findOne({email})
         if(!emailUser)return false;
         return emailUser
      } catch (error) {
         console.log(error);
      }
    }
}