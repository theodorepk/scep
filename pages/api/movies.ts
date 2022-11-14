// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IFilm } from "../../interfaces/IFilm";
import connectMongo from "../../utils/connectMongo";
const Films = require("../../models/Films");

export default async function user(
  req: NextApiRequest,
  res: NextApiResponse<IFilm[]>
) {
  await connectMongo();
  const users: IFilm[] = await Films.find();

  res.status(200).json(users);
}
