import express from "express"
import handleSignup from "./controllers/signup.js"
import handleLogin from "./controllers/login.js"
const router = express.Router()
router.post("/signup",handleSignup)
router.post("/login",handleLogin)

export default router