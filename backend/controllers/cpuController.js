import mongoose from "mongoose";

import Cpu from "../models/cpuModel.js";

export const createCpu = async (req, res) => {
    const cpuProduct = req.body;

    if (
        !cpuProduct.name ||
        !cpuProduct.nCores ||
        !cpuProduct.frequency ||
        !cpuProduct.nmArch ||
        !cpuProduct.price
    ) {
        return res.status(400).json({
            sucess: false,
            message: "Please provide all fields.",
        });
    }

    const newCpu = new Cpu(cpuProduct);

    try {
        await newCpu.save();
        res.status(201).json({
            success: true,
            data: newCpu,
        });
    } catch (error) {
        console.error(`Error in create cpu: ${error}`);
        res.status(500).json({
            success: false,
            message: "Server error in create Cpu.",
        });
    }
};

export const deleteCpu = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Invalid Product Id" });
    }

    try {
        await Cpu.findByIdAndDelete(id);
        res.status(200).json({ sucess: "true", message: "Cpu deleted." });
    } catch (error) {
        res.status(404).json({ sucess: "false", message: "Cpu not found." });
    }
};

export const getCpus = async (req, res) => {
    try {
        const { host } = req.headers;
        const cpus = await Cpu.find({});
        res.status(200).json({ success: "true", data: cpus });
        console.log(`Served "getCpus" to ${host}`);
    } catch (error) {
        res.status(500).json({
            success: "false",
            message: "Server error: Could not retrieve data.",
        });
    }
};

export const getCpu = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const cpu = await Cpu.findById(id);
        res.status(200).json({ success: true, data: cpu });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error: Could not retrieve data.",
        });
    }
};

export const updateCpu = async (req, res) => {
    const { id } = req.params;
    const cpuProduct = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ success: false, message: "Item not found." });
    }

    try {
        const updatedCpu = await Cpu.findByIdAndUpdate(id, cpuProduct, {
            new: true,
        });
        res.status(200).json({ sucess: true, data: updatedCpu });
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Server error: Could not update data.",
        });
    }
};
