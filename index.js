const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Stay Finder is running")
})

app.listen(port, () => {
    console.log(`Stay Finder server is running on PORT: ${port}`);
})