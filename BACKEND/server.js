import express from "express"
import dotenv from "dotenv"
import connectDB from "./connectDB.js"
import mongoose from "mongoose"
import corsOption from "./cors.js"
import cors from "cors"
import router from "./router.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json());
app.use("/user", router)
connectDB()
const PORT = process.env.PORT || 3500

mongoose.connection.on("open", () => {
    console.log("Mongodb Connected")
    app.listen(PORT, (err) => {
        if (err) throw err
        console.log("PORT is alreeady running on " + PORT)
    })
})
