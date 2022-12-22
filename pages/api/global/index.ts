import { NextApiRequest, NextApiResponse } from "next";
import { IGlobal } from "../../../interfaces/IGlobal";
import connectMongo from "../../../utils/connectMongo";

const Global = require("../../../models/Global");

export default async function addGlobal(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await connectMongo();
    const global: IGlobal = await Global.find();
    console.log(global);
    res.status(200).json(global);
  }
}
