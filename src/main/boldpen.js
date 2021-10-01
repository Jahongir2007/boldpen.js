/*

  Boldpen.js mini CLI framework for Node.js
  Author: Jahongir Sobriov
  License: MIT (c) 2021 All rights reserved

*/

const fs = require('fs');
const boldpencli = "boldpen_cli>"

function run(self){

    const filename = process.argv[2];
    fs.writeFileSync(`${process.cwd()}/${filename}`, self);
    console.log(`${boldpencli} The process is done`);
    console.log(`${boldpencli} File to run: ${filename}`);

}

module.exports = { run };
