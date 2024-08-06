import mongoose from "mongoose"
const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URI,
        console.log("connected successfully")
    )
}
export default connectDB