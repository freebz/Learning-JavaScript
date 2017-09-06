const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
});

const port = 8080;
server.listen(port, function() {
    // 서버가 시작됐을 때 호출될 콜백을 넘길 수 있습니다.
    console.log(`server started on port ${port}`);
});
