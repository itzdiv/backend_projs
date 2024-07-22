import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var ab="";

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html");
})

function namin(req,res,next){
  console.log("Function to get the name:");
  console.log(req.body);
  let a = req.body["street"];
  let b = req.body["pet"];
  ab = a+" "+b;
  next();
}
app.use(namin);

app.post("/submit",(req,res)=>{
  res.sendFile("/submit");
  res.send(`Your band name is : ${ab}`);
  

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
