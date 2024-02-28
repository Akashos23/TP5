import mongoose from "mongoose";


connectDatabase().catch(err => console.log(err));

export async function connectDatabase() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tp5');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export async function DisconnectDatabase() {
    await mongoose.disconnect();

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




