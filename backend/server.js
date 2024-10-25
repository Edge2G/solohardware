import express from "express";
import cors from 'cors';

import cpuRoutes from "./routes/cpuRoutes.js";
import { connectDB } from "./db.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())

app.use("/api/cpus", cpuRoutes); // This has to be after json middleware

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
    connectDB();
});
