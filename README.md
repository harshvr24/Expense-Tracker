# 💳 Expense Tracker - Full Stack (Vercel Ready)

A **production-ready, fully serverless expense tracker** deployable on Vercel in seconds! React frontend + Vercel serverless API + MongoDB database.

🚀 **Deploy on Vercel** | ⚡ **Serverless API** | 💾 **MongoDB Atlas** | 📱 **Fully Responsive**

---

## ✨ Features

✅ Add income/expense transactions  
✅ Delete transactions  
✅ View real-time balance  
✅ Income vs Expense breakdown  
✅ Transaction history with dates  
✅ Fully responsive design  
✅ Serverless API (no backend server needed)  
✅ Deploy on Vercel in 2 minutes  

---

## 🚀 Deploy to Vercel (2 Minutes)

### Step 1: MongoDB Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create M0 (free) cluster
4. Create database user (save password!)
5. Network Access → Allow 0.0.0.0/0
6. Clusters → Connect → Drivers → Copy connection string
7. Replace `<password>` with your actual password

**Connection string format:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/expense-tracker?retryWrites=true&w=majority
```

### Step 2: Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy"
   git push
   ```

2. **Go to Vercel**
   - https://vercel.com
   - Click "Import Project"
   - Select your GitHub repo
   - **Environment Variables:**
     - `MONGO_URI`: Your MongoDB connection string
     - `FRONTEND_URL`: (Vercel will auto-fill)
   - Click **Deploy**

3. **Done!** 
   - Your app is live at `https://your-project.vercel.app`
   - Test by adding transactions

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm 9+  
- MongoDB Atlas account (free)

### Setup

```bash
# 1. Clone
git clone https://github.com/harshvr24/Expense-Tracker.git
cd expense-tracker

# 2. Create .env.local
cp .env.local.example .env.local

# 3. Edit .env.local - Add your MongoDB connection string
# Windows: notepad .env.local
# Mac/Linux: nano .env.local

# 4. Install
npm install
cd frontend && npm install

# 5. Run
cd .. && npm run dev
```

**Frontend:** http://localhost:3000  
**API:** http://localhost:3000/api/transactions

---

## 📁 Project Structure

```
expense-tracker/
├── api/                      # Serverless API functions
│   ├── transactions.js       # Main endpoint
│   └── lib/
│       ├── db.js             # MongoDB connection
│       └── Transaction.js    # Schema
├── frontend/                 # React app
│   ├── src/
│   │   ├── App.js            # Main component
│   │   ├── components/       # 7 components
│   │   ├── api/axios.js      # API client
│   │   └── styles/App.css
│   └── package.json
├── vercel.json               # Vercel config
├── package.json              # Root dependencies
└── README.md                 # This file
```

---

## 🔌 API Endpoints

All at: `https://your-app.vercel.app/api/transactions`

### GET - Fetch all transactions
```bash
curl https://your-app.vercel.app/api/transactions
```

### POST - Add transaction
```bash
curl -X POST https://your-app.vercel.app/api/transactions \
  -H "Content-Type: application/json" \
  -d '{"text":"Coffee","amount":-5}'
```

### DELETE - Remove transaction
```bash
curl -X DELETE https://your-app.vercel.app/api/transactions/[ID]
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18.2
- **API:** Vercel Serverless Functions (Node.js)
- **Database:** MongoDB Atlas
- **Hosting:** Vercel

---

## 🧪 Test It

### Add Income
- Description: "Salary"
- Amount: "5000"  
- ✅ Balance shows +$5000

### Add Expense
- Description: "Groceries"
- Amount: "-100"
- ✅ Balance shows +$4900

### Delete
- Click ✕ on any transaction
- ✅ Removed and balance updates

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| API Error 500 | Check MONGO_URI in Vercel env vars |
| Can't connect to API | Make sure `FRONTEND_URL` is set in Vercel |
| No transactions showing | Check MongoDB Atlas ip whitelist (0.0.0.0/0) |
| Local dev not working | Create `.env.local` with MongoDB URI |

---

## 📱 Responsive
- Mobile (320px+)
- Tablet (600px+)
- Desktop (1024px+)

---

## 🔒 Security
✅ CORS headers configured  
✅ Environment variables for secrets  
✅ Input validation  
✅ No sensitive data in code  

---

## ✅ Deployment Checklist
- [ ] MongoDB cluster created
- [ ] Database user created
- [ ] IP whitelist set to 0.0.0.0/0
- [ ] Connection string copied  
- [ ] GitHub repo created
- [ ] Vercel account created
- [ ] Environment variables set
- [ ] Deployed successfully
- [ ] Tested on Vercel URL

---

## 📞 Help
- **Issues?** Check Vercel logs: Dashboard → Logs
- **Local problem?** Check terminal output
- **API error?** Check MongoDB connection string

---

**Status:** ✅ Production Ready  
**Version:** 2.0.0  
**Deploy to Vercel Now:** https://vercel.com/import

🚀 **Deploy in 2 minutes!**
