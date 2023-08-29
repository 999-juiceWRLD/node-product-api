const express = require("express")
const connectDB = require('./server')

const app = express();
const PORT = 3000;

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, console.log("running on " + PORT));
    } catch (err) {
        console.log(err);
    }
}

start();

module.exports = app;
