import { HydratedDocument } from "mongoose";
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
    const global: IGlobal = await Global.findByIdAndUpdate(
      "63a43e55421587d382a7a6d8",
      {
        currentSeason: season,
      }
    );
    res.status(200).json(`Current season has been changed to ${season}`);
  }
}
