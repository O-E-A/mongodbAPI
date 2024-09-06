// index.js (Ana uygulama dosyası)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Konfigürasyonları yükle
require('./config/database');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route'ları yükle
app.use('/api/users', require('./routers/user'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
