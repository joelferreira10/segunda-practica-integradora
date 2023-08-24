
import UserModelDao from "../daos/user.dao.js";
const userDao=new UserModelDao();
import {generateToken} from '../jwt/auth.js'
export const registerUser=async(req,res)=>{
    try {
        const {email}=req.body
       const newUser=await userDao.getByEmail(email)
       if(newUser){
        return res.status(401).json({msg:"user exists"})
       }else{
        await userDao.register(req.body)
       }
       res.send({
        msg:"register ok",
        session:req.session,
       })
    } catch (error) {
        console.log(error);
    }
}
export const loginUser=async(req,res)=>{
    try {
    
    const {email,password}=req.body;
    const userExist=await userDao.login({email,password})
    console.log("user desde controller",userExist);
    if(!userExist)return res.status(404).json({msg:"invalid credentials"})
    
    const token=generateToken(userExist)
        res.
            header('Authorization',token)
            .json({msg:"Login Ok",token})
    } catch (error) {
        console.log(error);
    }
}

export const logout=(req,res)=>{
    req.session.destroy(err=>{
        if(!err)res.render('login')
        else res.redirect('/login-error')
    })
}

export const privateEndpoint=(req,res)=>{
    try {
        const{first_name,last_name,email}=req.user;
        return  res.status(201).json({
            state:"success",
           userData:first_name,last_name,email
        })
    } catch (error) {
        
    }
}

export const githubResponse=async(req,res)=>{
    try {
        const {first_name,email,isGithub}=req.user;
        res.json({
            msg:"login/register ok",
            session:req.session,
            dataUser:{first_name,email,isGithub}
        })
    } catch (error) {
        console.log(error);
    }
}

export const googleResponse = async (req, res, next) => {
    try {
      // console.log(req.user)
      const { first_name, last_name, email, isGoogle } = req.user;
      res.json({
        msg: "Register/Login Google OK",
        session: req.session,
        userData: {
          first_name,
          last_name,
          email,
          isGoogle,
        },
      });
    } catch (error) {
      next(error.message);
    }
  };
  

  export const loginFront=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist=await userDao.login({email,password})
        if(!userExist)return res.status(404).json({msg:"invalid credentials"})
        const token=generateToken(userExist)
            res.json({msg:"Login Ok",token})
        } catch (error) {
            console.log(error);
        }
  }

  


