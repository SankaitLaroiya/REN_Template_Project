const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// =============== Middlewares ===============
const bodyParser = require('body-parser');

// This module sets req.body variable of ay request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// =============== Static Directory ===============
app.use(express.static(path.join(__dirname, 'client', 'build')));

// =============== Endpoints ===============


// =============== KICK OFF ===============
app.listen(port, () => console.log(`Listening on port ${port}`));