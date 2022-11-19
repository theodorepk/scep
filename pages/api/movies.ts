// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IFilm } from "../../interfaces/IFilm";
import connectMongo from "../../utils/connectMongo";
const Film = require("../../models/Film");

export default async function getMovies(
  req: NextApiRequest,
  res: NextApiResponse<IFilm[]>
) {
  await connectMongo();
  const movies: IFilm[] = await Film.find();
  res.status(200).json(movies);
}
