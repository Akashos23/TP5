import LivreModel from "../ModelDaatabase/model.js";
import {connectDatabase, DisconnectDatabase} from "../DatabaseConnection/databases.js";
export async function ajoutLivre(req, rep) {
    const data = req.body;
    try {
        await connectDatabase();
        let livre= new LivreModel({
            title : data.titre,
            author : data.auteur,
            description : data.description,
            format : data.format
        });
        await livre.save();
        await DisconnectDatabase();
        return rep.status(200).text("Ajout livre");
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
        return rep.status(200).send(res);
    }
    catch(e){
        console.error(e);
    }
}

export async function MiseAJourLivre(req, rep) {
    try {
        await connectDatabase();
        const data = req.body;
        const res = await LivreModel.updateOne({_id: data.id}, {title : data.titre, author : data.auteur, description : data.descriptions, format : data.format}).exec();
        await DisconnectDatabase();
        return rep.status(200).send(res);

    }
    catch(e){
        console.error(e);
    }
}

export async function SupprimerLivre(req, rep) {
    try {
        await connectDatabase();
        const data = req.body;
        const res = await LivreModel.deleteOne({_id : data.id}).exec();
        await DisconnectDatabase();
        return rep.status(200).send(res);
    }
    catch(e){
        console.error(e);
    }
}