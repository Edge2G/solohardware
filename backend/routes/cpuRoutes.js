import express from "express";

import {
    createCpu,
    deleteCpu,
    getCpus,
    getCpu,
    updateCpu,
} from "../controllers/cpuController.js";

const router = express.Router();

// Create a Cpu
router.post("/", createCpu);

// Delete a cpu
router.delete("/:id", deleteCpu);

// Get all Cpus
router.get("/", getCpus);

// Get one Cpu
router.get("/:id", getCpu);

// Update a Cpu
router.put("/:id", updateCpu);

export default router;
