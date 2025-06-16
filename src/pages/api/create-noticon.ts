import { NextApiRequest, NextApiResponse } from 'next';
import { createNoticon } from '../../apis/noticon';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let input;

  try {
    input = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (error) {}

  res.setHeader('Access-Control-Allow-Origin', 'https://www.piku.co.kr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();

    return;
  }

  try {
    await createNoticon(input);
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(200).json({ ok: false });
  }
}
