import mongoose from "mongoose";

const instSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true}
})

const instModel = mongoose.model('Inst', instSchema)
export {instModel as Inst}