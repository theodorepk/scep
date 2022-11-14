// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IFilm } from "../../../interfaces/IFilm";
import connectMongo from "../../../utils/connectMongo";
const Film = require("../../../models/Film");

export default async function addMovie(
  req: NextApiRequest,
  res: NextApiResponse
  //   <IFilm[]>
) {
  try {
    await connectMongo();
    const newFilm: IFilm = await Film.create(req.body);
    res.json(newFilm);
    console.log("success");
  } catch (error) {
    res.status(400).json({ error });
  }
}
