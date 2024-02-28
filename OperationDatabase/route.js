import {ajoutLivre, SupprimerLivre, MiseAJourLivre, RecupereLivre} from "../Controllers/operation.js";

export default async (app, opts) => {
    app.route({
        method: "POST",
        url: "/Livre",
        handler : ajoutLivre
    });
    app.route({
        method: "GET",
        url: "/Livre",
        handler : RecupereLivre
    });

    app.route({
        method: "PUT",
        url: "/Livre",
        handler : MiseAJourLivre
    });
    app.route({
        method: "DELETE",
        url: "/Livre",
        handler : SupprimerLivre
    });

}