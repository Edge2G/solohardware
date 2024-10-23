import express from 'express';
import mongoose from 'mongoose';

import { Cpu } from './models/cpuModel.js';

import { connectDB } from './db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Create a Cpu
app.post('/cpus', async (req, res) =>{
    const cpuProduct = req.body;

    if (!cpuProduct.name || !cpuProduct.nCores || !cpuProduct.frequency || !cpuProduct.nmArch || !cpuProduct.price) {
        return res.status(400).json({
            sucess: false,
            message: "Please provide all fields."
        });
    }

    const newCpu = new Cpu(cpuProduct);

    try {
        await newCpu.save();
        res.status(201).json({
            success: true,
            data: newCpu
        });
    } catch (error) {
        console.error(`Error in create cpu: ${error}`);
        res.status(500).json({
            success: false,
            message: "Server error in create Cpu."
        });
    }
})

// Delete a cpu
app.delete('/cpus/:id', async (req, res) => {
    const {id} = req.params;

    try {
        await Cpu.findByIdAndDelete(id);
        res.status(200).json({sucess: "true", message: "Cpu deleted."})
    } catch (error) {
        res.status(404).json({sucess: "false", message: "Cpu not found."})
    }
})

// Get all Cpus
app.get("/cpus", async (req, res) => {
    try {
        const cpus = await Cpu.find({});
        res.status(200).json({success: "true", data: cpus});
    } catch (error) {
        res.status(500).json({success: "false", message: "Server error: Could not retrieve data."});
    }
})

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
    connectDB();
})