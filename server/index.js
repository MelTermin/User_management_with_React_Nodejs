import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from "./routes/users.js"

const app=express();
app.use(bodyParser.json());
app.use(cors());


app.use("/", userRoutes)
app.get("/", (req,res)=>res.send("heloooo"))


app.listen(5004, () => console.log('Example app listening on port 5004!'));