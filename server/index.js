require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express(); 
const chatGPTRoutes = require("./routes/chatGPT");

app.use(cors());
app.use(bodyParser.json());

app.use("/chatGPT", chatGPTRoutes);

app.use(errorHandler)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});

const start = async = () => {
    try {
        app.listen(5000, () => {
            console.log("Server started on port 5000");
         });
    } catch (e) {
        console.log(e);
    }
}

start();