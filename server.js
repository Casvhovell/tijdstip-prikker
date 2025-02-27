const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Eenvoudige testroute
app.get("/", (req, res) => {
    res.send("Server werkt!");
});

// Start de server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});