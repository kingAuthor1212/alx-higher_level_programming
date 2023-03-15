#!/usr/bin/node

const js = require('fs');

const data1 = js.readFileSync(process.argv[2], 'utf8');
const data2 = js.readFileSync(process.argv[3], 'utf8');

js.writeFileSync(process.argv[4], data1 + data2);
