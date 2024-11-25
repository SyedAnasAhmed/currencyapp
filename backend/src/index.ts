import express, { Request, Response } from 'express';
import { getCurrencyData } from './Services/currencyapi.js';
import { PORT } from './config.js';
import cors from "cors"

const app = express();
app.use(cors()); 

app.get('/api/currencies', async (req: Request, res: Response) => {
  try {
    const data = await getCurrencyData();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
