import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    clerk_id: {
        type:String,
        required:true,
        unique:true,
    },
    clerk_img: {
        type:String,
        required:true,
        unique:true,
    },
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    img: {
        type:String,
        required:false,
    },
    country: {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required:false,
    },
    desc: {
        type:String,
        required:false,
    },
    isIng: {
        type:String,
        required:false,
    },
},{
    timestamps:true
});

export default mongoose.model("User",userSchema)