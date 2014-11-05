/*jslint node: true*/
"use strict";
var concat = require('concat-stream');
var through = require('through');
var reverse = concat(function (data) {
  if (!data) {
    process.stdout.write('');
  }
  if (data) {
    process.stdout.write(data.toString().split('').reverse().join(''));
  }
});
process.stdin
  .pipe(reverse);
