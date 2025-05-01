import mongoose from "mongoose";

async function databaseConnect() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.vymipum.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default databaseConnect;