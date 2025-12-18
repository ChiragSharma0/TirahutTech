// server.js
require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const trackRoutes = require('./routes/Track');
const Dashroutes =  require("./routes/Dashboard")
const connectDB = require("./config/db");



const app = express();

app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true,               // allow cookies if needed
}));

// Connect MongoDB
connectDB();

// health
app.get('/_health', (req, res) => res.json({ ok: true }));

// tracking route
app.use('/track', trackRoutes);
app.use("/dashboard",Dashroutes);

// basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'server_error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
