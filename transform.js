/*jslint node: true*/
"use strict";
var through = require('through');
var tr = through(function write(data) {
  if (data) {
    this.queue(data.toString().toUpperCase());
  }
});
process.stdin.pipe(tr).pipe(process.stdout);
