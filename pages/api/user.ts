import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../utils/connectMongo";

export default async function user(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   console.log("connecting to MONGO");

  await connectMongo();
  //   console.log("connected to MONGO");
  console.log(typeof process.env.MONGODB_URI);
  console.log(typeof process.env);

  res.status(200).json("test");
}
