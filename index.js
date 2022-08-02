const express = require('express');
const route  = require('./routes/route.js');
const app = express();
const hostname = '127.0.0.1';
const port = 8000;

app.use(express.json());
app.use('/', route);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});