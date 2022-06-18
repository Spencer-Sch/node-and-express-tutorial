const path = require('path');

// console.log(path.sep);

// creates a normalized path (extra slashes are removed)
const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

// gives the filename at the end of a path
const base = path.basename(filePath);
// console.log(base);

// path.resolve() returns an absolute path
// '__dirname' here points to the directory in which this file (app.js) is located
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
