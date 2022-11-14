import mongoose from "mongoose";

//Typescript doesn't know the type of variable on .env. We force the type of MONGODB_URI as a string
const uri: string = process.env.MONGODB_URI as string;

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
