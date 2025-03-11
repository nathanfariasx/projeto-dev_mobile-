const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,{ 'Content-Type': 'text/plain'});
    res.end('nathan é lindo');
});

const PORT = 3000;
server.listen(PORT,() => {
    console.log('servidor rodando em http://localhost:${PORT}');
});