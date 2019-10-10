import {createServer,Server} from 'https';
import { EventEmitter } from 'events';
import { eventNames } from 'cluster';
import { IncomingMessage } from 'http';
const setting = require("./setting");
const fs = require('fs');
let evetnEmmiter:EventEmitter = new EventEmitter();
const options = {
  key: fs.readFileSync('./cert/privkey.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};


createServer(options,(req:IncomingMessage, res) => {
    evetnEmmiter.emit("connect",req);
    res.writeHead(200);
    res.end('hello world\n');
}).listen(setting.listenPort);
evetnEmmiter.emit("start");


evetnEmmiter.on("start",function() {
    console.log("https服务器运行于端口:" + setting.listenPort);
});

evetnEmmiter.on("connect",function(data){
    console.log("建立连接");
    console.log(JSON.stringify(data));
});