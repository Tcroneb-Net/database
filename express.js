const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// ✅ MongoDB URI
const uri = "mongodb+srv://tcronebtech2015:tcroneb2025@cluster0.jpm0fpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ✅ API route to check MongoDB live status
app.get('/status', async (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({ live: isConnected });
});

// ✅ Serve static files (HTML/CSS/JS)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
