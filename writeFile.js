const fs = require("fs");



let myObj = {
    name:"Ratul",
    versity:"Daffodil",
    adrees : {
        city:"Pabna",
        country:"Bangladesh"
    },
}

let adreesData =JSON.stringify(myObj);

fs.writeFile("./Test.json",adreesData,(err)=>{
    if (err){
        console.log(err)
    } else  {
        console.log("Succes Fully Saved File");
    }
});

