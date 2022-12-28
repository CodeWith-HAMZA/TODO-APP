const { Schema, model, models, default: mongoose } = require("mongoose");
// * give us current date
// let date = new Date().toLocaleDateString();
// console.log(date); // 6/17/2022

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isDone: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema) 
module.exports = Note;

