// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { HydratedDocument, models } from "mongoose";

import { IFilm } from "../../../interfaces/IFilm";
import connectMongo from "../../../utils/connectMongo";
const Film = require("../../../models/Film");
const User = require("../../../models/User");

export default async function addMovie(
  req: NextApiRequest,
  res: NextApiResponse
  //   <IFilm[]>
) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const { title, director, year } = req.body;

      //input select to choose the user (with fetching user route)
      const user = await User.findOne({ name: "Théodore PK" });

      const newMovie: HydratedDocument<IFilm> = new Film({
        infos: {
          title,
          director,
          year,
        },
        meeting: {
          cm: user,
        },
      });

      await newMovie.save();
      res.json("is ok");
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
