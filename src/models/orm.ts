import mongoose from "mongoose";
import { Post } from "../models/categoria";

const connectionString="mongodb+srv://bino86it:J6n7IsnyQjXKPw7b@cluster0.0fmjvsa.mongodb.net/?retryWrites=true&w=majority";

//vedere i posts

export const getPosts = async ()=> {

    try{

        await mongoose.connect(connectionString, {dbName:"posts"});

        return await Post.find();

    } catch (error){
        console.error(error)
    }
    finally{
        await mongoose.disconnect();
    }


}

//inserimento post

export const insertPost = async (titolo:string, autore:string, testo:string)=> {

    try{

        await mongoose.connect(connectionString, {dbName:"posts"});

        let post = new Post();
        post.titolo=titolo;
        post.autore=autore;
        post.testo=testo;
    
        const result = await post.save();

        return result;


    } catch (error){
        console.error(error)
    }
    finally{
        await mongoose.disconnect();
    }


}

//cancellazione post


export const deletePost = async (id:string)=> {

    try{

        await mongoose.connect(connectionString, {dbName:"posts"});

        return await Post.deleteOne({ _id:id });


    } catch (error){
        console.error(error)
    }
    finally{
        await mongoose.disconnect();
    }

}

//aggiornamento post

export const updatePost = async (id:string, updatedData:{ titolo:string, autore:string,testo:string})=>{

try {
    await mongoose.connect(connectionString, { dbName: "posts" });

         // Trova il post con l'id fornito
         const post = await Post.findById(id);

         // Verifica se il post è stato trovato
            if (!post) {
                console.error("Post non trovato");
                return;
            }
         // Aggiorna i dati del post con quelli forniti
         if (updatedData.titolo) post.titolo = updatedData.titolo;
         if (updatedData.autore) post.autore = updatedData.autore;
         if (updatedData.testo) post.testo = updatedData.testo;

       
    await post.save();


} catch (error) {
    console.error(error);
}
finally {
    await mongoose.disconnect();
}

}

