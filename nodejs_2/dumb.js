const file = require("fs");
file.writeFile("text1.txt","Hello from nodeJs!",(err)=>{
    if(err) throw err;
    console.log("file saved succesfully");
})


