import mongoose from "mongoose";

const cpuSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        nCores: {
            type: Number,
            required: true,
        },
        frequency: {
            type: String,
            required: true,
        },
        nmArch: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Cpu = mongoose.model('Cpu', cpuSchema);