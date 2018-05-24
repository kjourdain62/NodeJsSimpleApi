'use strict';
const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);
});