import {createServer,Server} from 'https';
import { EventEmitter } from 'events';
const setting = require("./setting");
const fs = require('fs');
let evetnEmmiter:EventEmitter = new EventEmitter();
const options = {
  key: fs.readFileSync('./cert/privkey.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};


createServer(options,(req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(setting.listenPort);
evetnEmmiter.emit("start");


evetnEmmiter.on("start",()=>{
    console.log("https服务器运行于端口:" + setting.listenPort);
});