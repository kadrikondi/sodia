import express from "express"
import handleSignup from "./controllers/signup.js"
const router = express.Router()
router.post("/signup",handleSignup)

export default router