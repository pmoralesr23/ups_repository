import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId:{
        type:String,
        required: true,
    },
    cat:{
        type:String,
        required: false,
    },
    title:{
        type:String,
        required: true,
    },
    desc:{
        type:String,
        required: false,
    },
    totalStars:{
        type:Number,
        default: 0,
    },
    starNumber:{
        type:Number,
        default: 0,
    },
    cover:{
        type:String,
        required: false,
    },
    tools:{
        type:[String],
        required: false,
    },
    images:{
        type:[String],
        required: false,
    },
    file:{
        type:String,
        required: true,
    },
    privacity:{
        type:Boolean,
        default: true,
        required: false,
    },
    level:{
        type:Number,
        required: false,
    },
    area:{
        type:String,
        required: false,
    },


},{
    timestamps:true
});

export default mongoose.model("Gig", GigSchema)