import connectDB from './lib/db.js';
import Transaction from './lib/Transaction.js';

const corsHeaders = {
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Origin': process.env.FRONTEND_URL || '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  'Access-Control-Allow-Headers': 'X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version',
};

async function handleCORS(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).send('ok');
    return;
  }

  try {
    await connectDB();

    if (req.method === 'GET') {
      // Get all transactions
      const transactions = await Transaction.find().sort({ createdAt: -1 });
      res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
      });
    } else if (req.method === 'POST') {
      // Add transaction
      const { text, amount } = req.body;

      if (!text || text.trim() === '') {
        return res.status(400).json({ success: false, error: 'Please add a description' });
      }
      if (amount === undefined || amount === null || isNaN(amount)) {
        return res.status(400).json({ success: false, error: 'Please add a valid amount' });
      }

      const transaction = await Transaction.create({ text, amount: Number(amount) });
      res.status(201).json({ success: true, data: transaction });
    } else if (req.method === 'DELETE') {
      // Delete transaction
      const { id } = req.query;
      const transaction = await Transaction.findById(id);
      
      if (!transaction) {
        return res.status(404).json({ success: false, error: 'Transaction not found' });
      }
      
      await Transaction.findByIdAndDelete(id);
      res.status(200).json({ success: true, data: {} });
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed' });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}
