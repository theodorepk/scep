import mongoose from "mongoose";

//Typescript doesn't know the type of variable on .env. We force the type of MONGODB_URI as a string
//https://stackoverflow.com/questions/69461972/typescript-says-nextjs-environment-variables-are-undefined
//https://stackoverflow.com/questions/45194598/using-process-env-in-typescript

const uri: string = process.env.MONGODB_URI as string;

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
