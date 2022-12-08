// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { HydratedDocument } from "mongoose";

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
      const {
        title,
        director,
        release_date,
        userId,
        synopsis,
        poster,
        tmdbId,
      } = req.body;
      //input select to choose the user (with fetching user route)
      const user = await User.findOne({ _id: userId });

      const newMovie: HydratedDocument<IFilm> = new Film({
        infos: {
          title,
          director,
          release_date,
          synopsis,
          poster,
          tmdbId,
        },
        meeting: {
          cm: user,
        },
      });

      console.log(newMovie);

      await newMovie.save();
      res.json("isOk");
    } catch (error) {
      res.status(400).json({ error });
    }
  } else if (req.method === "GET") {
    await connectMongo();
    const movies: IFilm[] = await Film.find();
    res.status(200).json(movies);
  }
}
