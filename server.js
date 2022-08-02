const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 8000

app.get('/', function (req, res) {
    console.log("Hello World!");
    res.send("Hello World!");
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});