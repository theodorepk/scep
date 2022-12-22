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
    // console.log(global);
    res.status(200).json(global);
  } else if (req.method === "POST") {
    const { season } = req.body;
    await connectMongo();
    const global: IGlobal[] = await Global.find();
    global[0].currentSeason = season;
    await global[0].save();
    res.status(200).json(`Current season has been changed to ${season}`);
  }
}
