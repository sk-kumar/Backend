const http = require('http');

http.createServer(function (req, res) {
    res.end("Hello Word!");
}).listen(8000);