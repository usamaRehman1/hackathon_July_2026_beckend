import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./src/helperFunc/connectDB.js";
import { ENV } from "./src/constant/index.js"
import routers from "./src/router/index.js"
config()
connectDB();

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api", routers);

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