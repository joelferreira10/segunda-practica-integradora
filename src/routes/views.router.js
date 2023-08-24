
import {Router} from 'express'
import { loginfrontHandle } from '../controllers/views.controller.js';
const router=Router();

router.get('/loginfonthandle',loginfrontHandle)


export default router