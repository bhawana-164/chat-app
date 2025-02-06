import express from "express";
import cors from"cors";

import authRoutes from "./routes/auth.route.js";



const app = express();


app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}))
app.use("/api/auth",authRoutes)

app.listen(5001, ()=>{
    console.log("server is running on port 5001");
});