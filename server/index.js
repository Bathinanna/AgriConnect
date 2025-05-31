const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const client = require('prom-client');
const fs = require('fs');
const morgan = require('morgan');

const app = express(); // <-- Move this up before using 'app'

// ---- Logging Setup ----
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}
const accessLogStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());

// ---- Prometheus Metrics Setup ----
const register = new client.Registry();
client.collectDefaultMetrics({ register });
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// ---- MongoDB Connection ----
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// ---- Basic Route ----
app.get('/', (req, res) => {
  res.send('Farmers Portal API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
