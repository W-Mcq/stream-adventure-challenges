/*jslint node: true*/
"use strict";
var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
  var caps = through(function write(data) {
    if (data) {
      this.queue(data.toString().toUpperCase());
    }
  });
  if (req.method !== 'POST') {
    res.end();
  }
  req.pipe(caps).pipe(res);
});
server.listen(process.argv[2]);
