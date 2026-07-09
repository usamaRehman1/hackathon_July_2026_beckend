import mongoose from "mongoose";
import { ENV } from "../constant/index.js";

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASS}@hackathonjuly.gzndo0d.mongodb.net/`);
        console.log(`MongoDB Connected => ${con.connection.host}`)
    } catch (error) {
        console.log("Error =>", error)
    }
}