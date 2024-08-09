import express from "express"
import handleSignup from "./controllers/signup.js"
import handleLogin from "./controllers/login.js"
import verifyJwt from "./middleware/verifyJwt.js"
import getAllUser from "./controllers/getUser.js"
const router = express.Router()
router.post("/signup",handleSignup)
router.post("/login",handleLogin)
router.use(verifyJwt);
router.get("/allusers",getAllUser)

export default router