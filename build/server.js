"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
const fs = require('fs');
const options = {
    key: fs.readFileSync('./cert/privkey.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};
let server = https_1.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(6800);
