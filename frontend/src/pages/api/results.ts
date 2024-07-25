import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const flaskBackendUrl = 'http://localhost:5000/results';
    const response = await axios.get(flaskBackendUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from Flask backend:', error);
    res.status(500).json({ error: 'Failed to fetch data from Flask backend' });
  }
}
