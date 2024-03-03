import {ajoutLivre, SupprimerLivre, MiseAJourLivre, RecupereLivre} from "../Controllers/operation.js";

export default async (app, opts) => {
    app.route({
        method: "POST",
        url: "/Livre",
        handler : ajoutLivre,
        schema: {
            body: {
                type: "object",
                properties: {
                    title: {type: "string"},
                    author: {type: "string"},
                    description : {type : "string"},
                    format : {type : "string"}
                },
                required: ["title", "author"],
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        title: {type: 'string'},
                        author: {type: 'string'},
                        description: {type: 'string'},
                        format: {type: "string"}
                    },
                    required: ["title", "author", "format"]
                }
            }
        },
    });

    const livres = {
        type : "object",
        properties: {
            title: {type: 'string'},
            author: {type: 'string'},
            description: {type: 'string'},
            format: {type: "string"}
        },
        required: ["title", "author", "format"]
    }
    app.route({
        method: "GET",
        url: "/Livre",
        handler : RecupereLivre,
        schema: {
            response: {
                200: {
                    type: "array",
                    items: livres
                }
            }
        },
    });

    app.route({
        method: "PUT",
        url: "/Livre",
        handler : MiseAJourLivre,
        schema: {
            body: {
                type: "object",
                properties: {
                    id : {type : "string"},
                    title: {type: "string"},
                    author: {type: "string"},
                    description : {type : "string"},
                    format : {type : "string"}
                },
                required: ["id"],
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        title: {type: 'string'},
                        author: {type: 'string'},
                        description: {type: 'string'},
                        format: {type: "string"}
                    },
                    required: ["title", "author", "format"]
                }
            }
        }
    });
    app.route({
        method: "DELETE",
        url: "/Livre",
        handler : SupprimerLivre,
        schema: {
            body: {
                type: "object",
                properties: {
                    id : {type : "string"},
                },
                required: ["id"],
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        title: {type: 'string'},
                        author: {type: 'string'},
                        description: {type: 'string'},
                        format: {type: "string"}
                    },
                    required: ["title", "author", "format"]
                }
            }
        }
    });

}