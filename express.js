const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = "mongodb+srv://tcronebtech2015:tcroneb2025@cluster0.jpm0fpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.get('/status', async (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({ live: isConnected });
});

app.use(express.static('public')); // Serve your HTML from /public folder

app.listen(10000, () => {
  console.log("Server is running on port 10000");
});
