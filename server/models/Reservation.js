import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
    name: {type: String},
    rentDate: {type: Date, required: true},
    visa: {type: String, required: true},
    
})

const rentModel = mongoose.model('Rent', rentSchema)
export {rentModel as Rent}