const mongoose = required("mongoose");
const workout = required("./controller/workout");
const workoutScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    caloriesBurned:{
        type:Number,
        required:true
    },
    exercises:{
        name:{
            type:String,
            required:true
        },
        reps:{
            type:Number,
            required:true
        },
        sets:{
            type:Number,
            required:true
        },
        weight:{
            type:Number,
            required:true
        },
    }
})