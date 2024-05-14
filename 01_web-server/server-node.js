const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url=req.url;
  if(url==='/'){ 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello welcome\n");
  }
  else if(url==='/chai'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello chai aur code\n");
  }
  else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("404 error\n");
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
