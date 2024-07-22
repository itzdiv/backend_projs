const file = require("fs");

file.readFile('text1.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 