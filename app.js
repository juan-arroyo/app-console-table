const { createFile } = require("./helpers/multiply");
const argv = require('./config/yargs')
require('colors');

//Console Clean
console.clear();


createFile(argv.b, argv.l, argv.e)
    .then (fileName => console.log(fileName.rainbow, 'created'.bgBrightRed))
    .catch ( err => console.log(err))
