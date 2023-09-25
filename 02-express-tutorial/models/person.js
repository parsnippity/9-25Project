const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Must provide a name"],
        trim: true,
        maxLength:[20, "The name cannot exceed 20 characters"]
    },
    age:{
        type:Number,
        default: 5
    }
})

module.exports = mongoose.model("Person", personSchema);
Model.find({complete:true});