import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({

    titolo: String,
    autore: String,
    testo:String,
    dataCreazione:{type: Date, default: Date.now()}
});

export const Post = mongoose.model("Post", categoriaSchema, "posts");
