const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const multer = require('multer');
const route  = require('./routes/route.js');
const app = express();
const hostname = '127.0.0.1';
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());

app.use('/', route);

mongoose.connect(process.env.DB)
    .then(() => console.log("MongoDB is Connected"))
    .catch(err => console.log(err));


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});