const express = require("express")
const connectDB = require('./server')
const productRouter = require('./routes/productRoutes')

const app = express();
app.use(express.json());
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

app.use('/api/', productRouter);

module.exports = app;
