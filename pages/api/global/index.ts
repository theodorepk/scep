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
    const global: IGlobal = await Global.findById("63a43e55421587d382a7a6d8");
    res.status(200).json(global);
  } else if (req.method === "POST") {
    try {
      const { currentSeason } = req.body;
      await connectMongo();
      const global = await Global.findById("63a43e55421587d382a7a6d8");
      // if (season > global.currentSeason) {
      global.currentSeason = currentSeason;
      global.save();
      res
        .status(200)
        .json(`Current season has been changed to ${currentSeason}`);
      // } else {
      // res.status(401).json({
      // message: `La nouvelle saison ne peut pas être antérieure à la saison actuelle`,
      // }
      // );
      // }
    } catch (error) {
      if (typeof error === "string") {
        res.status(404).json({ message: error.toUpperCase() });
      } else if (error instanceof Error) {
        res.status(404).json({ message: error.message });
      }
    }
  }
}
