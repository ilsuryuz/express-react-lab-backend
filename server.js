// ** Import Dependencies **
const express = require("express");
const cors = require("cors");

// ** Import JSON files **
const projects = require("./projects.json");
const about = require("./about.json");

const app = express();

// ** Middleware **
app.use(cors());

// ** Home route **
app.get("/", (req, res) => {
    res.send("Hello World");

});

// ** API **
app.get("/projects", (req, res) => {
    res.json(projects);
});

// ** About info **
app.get("/about", (req, res) =>{
    res.json(about);
});

// ** PORT **

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));