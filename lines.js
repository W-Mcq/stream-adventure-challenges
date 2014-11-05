/*jslint node: true*/
"use strict";
var through = require('through');
var split = require('split');
var isLineOdd = true;
var tr = through(function write(data) {
  if (!data) {
    this.queue('\n');
  }
  if (data && isLineOdd) {
    this.queue(data.toString().toLowerCase() + '\n');
  }
  if (data && !isLineOdd) {
    this.queue(data.toString().toUpperCase() + '\n');
  }
  isLineOdd = !isLineOdd;
});

process.stdin
  .pipe(split('\n'))
  .pipe(tr)
  .pipe(process.stdout);
