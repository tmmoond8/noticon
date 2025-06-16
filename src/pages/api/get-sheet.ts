// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbw6zKYeWddESrtPTNZP-fjGUF_uWpMyeIVR7zkT16_IlNkMqYo/exec?sheetName=qznqorjaesrgayapt6fs',
    {
      method: 'GET',
      mode: 'no-cors',
    },
  );
  const data = await response.json();

  res.status(200).json(data);
}

// `${process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL}?sheetName=${process.env.NEXT_PUBLIC_SHEET_NAME}`
