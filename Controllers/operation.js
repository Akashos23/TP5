import LivreModel from "../ModelDaatabase/model.js";
import {connectDatabase, DisconnectDatabase} from "../DatabaseConnection/databases.js";
export async function ajoutLivre(req, rep) {
    const data = req.body;
    try {
        await connectDatabase();
        let livre= new LivreModel({
            title : data.title,
            author : data.author,
            description : data.description,
            format : data.format
        });
        await livre.save();
        await DisconnectDatabase();
        const resultatJSON = {
            title : livre.title,
            author : livre.author,
            description : livre.description,
            format : livre.format
        }
        return rep.status(200).send(resultatJSON)
    }
    catch(e){
        console.error(e);
    }
}

export async function RecupereLivre(req, rep) {
    try {
        await connectDatabase();
        const res = await LivreModel.find({});
        await DisconnectDatabase();
        const resultatJSON = res.map(livres => ({
            title : livres.title,
            author : livres.author,
            description : livres.description,
            format : livres.format
        }))
        return rep.status(200).send(resultatJSON);
    }
    catch(e){
        console.error(e);
    }
}

export async function MiseAJourLivre(req, rep) {
    try {
        await connectDatabase();
        const data = req.body;
        const res = await LivreModel.findOneAndUpdate({_id: data.id}, {title : data.title , author : data.author, description : data.descriptions, format : data.format}).exec();
        await DisconnectDatabase();
        const resultatJSON ={
            title : res.title,
            author : res.author,
            description : res.description,
            format : res.format
        };
        return rep.status(200).send(resultatJSON);

    }
    catch(e){
        console.error(e);
    }
}

export async function SupprimerLivre(req, rep) {
    try {
        await connectDatabase();
        const data = req.body;
        const res = await LivreModel.findOneAndDelete({_id : data.id}).exec();
        await DisconnectDatabase();
        const resultatJSON = {
            title : res.title,
            author : res.author,
            description : res.description,
            format : res.format
        }
        return rep.status(200).send(resultatJSON);
    }
    catch(e){
        console.error(e);
    }
}