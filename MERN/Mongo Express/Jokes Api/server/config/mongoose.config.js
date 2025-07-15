const mongoose = require('mongoose');

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@abdallah-si.sazckjc.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Abdallah-Si`;

mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB connection error:", err));
