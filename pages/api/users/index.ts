// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../../interfaces/IUser";
import connectMongo from "../../../utils/connectMongo";
const User = require("../../../models/User");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser[]>
) {
  await connectMongo();
  const users: IUser[] = await User.find();

  res.status(200).json(users);
}
