import express from "express";
//middleware body parser 
import bodyParser from "body-parser";
//getting actual location of index.html page
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//code starts
const app = express();
const port = 3000;

//app.use
app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit",(req,res)=>{
console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
