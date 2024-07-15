
import express from 'express'
import {shouldBeLoggedIn, shouldBeAdmin} from '../controllers/test.controller.js'
import {verifyToken} from "../middleware/verifyToken.js"
const router=express.Router(); 
router.get("/should-be-loggedin",verifyToken,shouldBeLoggedIn)
router.get("/should-be-admin", shouldBeAdmin)

export default router;