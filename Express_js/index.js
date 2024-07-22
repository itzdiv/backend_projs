import express from "express";
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`Port is running at localhost ${port} 😀`);
});
app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("Welcome User");
})

app.get("/about",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>I am smart that all you shall know noob</h1>");
})

app.get("/contact",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>You  are not smart enough to contact me 😏</h1>");
})
