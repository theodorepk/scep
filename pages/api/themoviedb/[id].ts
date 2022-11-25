import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiKey: string = process.env.THEMOVIEDB_KEY as string;
    const { id } = req.query;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=fr-FR`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
}
