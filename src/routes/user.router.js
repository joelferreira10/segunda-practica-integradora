import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import passport from "passport";
const userController=new UserController()
const router=Router();

router

    .post('/register',userController.register)
    .post('/login',userController.login)
    .get('/current',passport.authenticate('jwt'),userController.current)
export default router;