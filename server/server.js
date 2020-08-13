const express = require('express');
const server = express();
const cors = require('cors');
require('dotenv').config();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send("Hello World!");
})

server.listen(3000, () => console.log("Server is started!"));