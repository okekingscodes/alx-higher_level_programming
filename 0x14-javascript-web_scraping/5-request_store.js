#!/usr/bin/node
const request = require('request');
const content = require('fs');

request(process.argv[2], function (err, response, body) {
  if (err == null) {
    content.writeFileSync(process.argv[3], body);
  }
});
