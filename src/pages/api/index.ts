// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type iData = {
  reaction: number
  memory: number
  verbal: number
  visual: number
}

const generateRandomNumber = () => +(Math.random() * 100).toFixed(0);

const data: iData = {
  reaction: generateRandomNumber(),
  memory: generateRandomNumber(),
  verbal: generateRandomNumber(),
  visual: generateRandomNumber(),
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<iData>
) => {
  res.status(200).json(data)
}

export default handler;
