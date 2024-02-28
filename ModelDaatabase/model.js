import mongoose from 'mongoose';
const { Schema } = mongoose;

const livre = new Schema({
    title: {type : String, required : true},
    author: {type : String, required : true},
    description : String,
    format: {type:String, enum:["poche", "manga", "audio"],default: "poche"}
});

const LivreModel = mongoose.model('Livre', livre);

export default LivreModel;