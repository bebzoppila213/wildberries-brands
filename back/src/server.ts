import dotenv from "dotenv";
import express from "express";
import {getItems} from "./api/getItems"
import cors from "cors"

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();
app.use(cors());

app.get("/api/v1/brands", async (req, res) => {
    const data = await getItems(String(req.query.name))  
    const brands = new Set(data.map((dataItem: any) => dataItem.brand))
    res.send(JSON.stringify([...brands]));
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});