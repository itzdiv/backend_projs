import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const passcode = "ILoveProgramming";
let userPasscode = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function getUserPasscode(req, res, next) {
    userPasscode = req.body["password"];
    next();
}

app.use(getUserPasscode);

app.post("/check", (req, res) => {
    if (userPasscode == passcode) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.send("Incorrect Passcode");
    }
});

app.listen(port, () => {
    console.log(`Server is functioning at port: ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
