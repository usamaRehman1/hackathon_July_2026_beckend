import express from "express";
import { connectDB } from "./src/helperFunc/connectDB.js";
import { ENV } from "./src/constant/index.js"
import { config } from "dotenv";
config()
connectDB();

const app = express();

// test route
app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Backend Running Sucessfully",
    })
})

const PORT = ENV.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is connceted on the port of ${PORT}`)
})

export default app;