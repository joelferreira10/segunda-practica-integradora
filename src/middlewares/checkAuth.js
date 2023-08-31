import jwt from "jsonwebtoken";
import Userdao from '../daos/user.dao.js'
import dotenv from 'dotenv'
dotenv.config()
const userDao=new Userdao();

// export const checkAuth=async(req,res,next)=>{
//     try {
//         const authHeader=req.get('Authorization')
//         if(!authHeader)return res.status(401).json({msg:"Unauthorizad"})
//         //Bearer token
//        const token=authHeader.split(" ")[1];
//        //console.log(`Token: ${token}`);
//        //console.log("verificador",jwt.verify(token,process.env.PRIVATE_KEY));
//        const decode=jwt.verify(token,process.env.PRIVATE_KEY)
//         const user=await userDao.getById(decode.userID)
//         if(!user)return res.status(401).json({msg:"Unauthorizad"})
//         req.user=user;
//         next()
//     } catch (error) {
//         console.log(error);
//         return res.status(401).json({ msg: "Unauthorized: Invalid Token" });
//     }
    
// }