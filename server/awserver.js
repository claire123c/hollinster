// stuff for AWS
const http = require('http');

const hostname = '172.31.75.146';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('aws connected');
});
// end stuff for AWS
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
