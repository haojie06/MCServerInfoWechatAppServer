"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
const events_1 = require("events");
const setting = require("./setting");
const fs = require('fs');
let evetnEmmiter = new events_1.EventEmitter();
const options = {
    key: fs.readFileSync('./cert/privkey.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};
let server = https_1.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    evetnEmmiter.emit("start");
}).listen(setting.listenPort);
evetnEmmiter.on("start", () => {
    console.log("https服务器运行于端口:" + setting.listenPort);
});
