import {createServer,Server} from 'https';
const fs = require('fs');

const options = {
  key: fs.readFileSync('./cert/privkey.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};


let server:Server =  createServer(options,(req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(6800);

