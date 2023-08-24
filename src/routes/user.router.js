import { Router } from "express";
import {registerUser,loginUser,privateEndpoint,loginFront} from "../controllers/user.controller.js";
//import passport from "passport";
import { checkAuth } from "../middlewares/checkAuth.js";
const router=Router();

router

    .post('/register',registerUser)
    .post('/login',loginUser)
    .get('/privateEndpoint',checkAuth,privateEndpoint)
    .post('/loginfront',loginFront)
export default router;