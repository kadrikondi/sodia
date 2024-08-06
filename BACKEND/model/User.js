import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
    username:{
        type: String,
        require: true
    },
    email: String,
    password:{
        type: String,
        require:true
    }
})
export default mongoose.model("User",userSchema)