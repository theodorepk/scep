import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiKey: string = process.env.THEMOVIEDB_KEY as string;
    const { search, year } = req.query;
    console.log(req.query);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr&query=${search}&include_adult=false&year=${year}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
}
