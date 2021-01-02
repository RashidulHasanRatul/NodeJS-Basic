
const fs = require("fs");

fs.readFile("./test.json",(err,data)=>{
    if (err){
        console.log(err);
    }

   const  rawData = JSON.parse(data);
    console.log(rawData);
})