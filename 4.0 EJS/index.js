import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
 
app.listen(port,()=>{
    console.log(`Server Running Responsively At port: ${port}`);
})

app.get('/', (req, res) => {
    const day = new Date;
    var now = day.getDay();
    var dayType="a weekday";
    var advice="Its time to study"
    if(now==0||now==6){
        dayType="a weekend";
        advice="Its time to Enjoy Yourself 🥂";
    }
    res.render('index.ejs', {dayType,advice});
  });