//@ts-nocheck
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import useFetchCpus from '../customHooks/useFetchCpus.js';

import Navbar from "../components/Navbar";
import ItemCard from "../components/ItemCard";
import SideFilters from "../components/SideFilters.js";

export default function CpuPage() {
    
    const URL = 'http://localhost:5050/api/cpus/';
    const [cpuData, setCpuData] = useState([]);

    useEffect(() => {
        const fetchCpus = async() => {
            const result = await fetch(URL);
            result.json().then(json => {
                console.log(json);
                setCpuData(json.data);
            });
        };

        fetchCpus();
    }, []);

    return (
        <>
            <Navbar />
            <div className="page-body">
                <SideFilters />
                <div className="card-group">
                    {cpuData?.map((data, index) => (
                        <ItemCard key={index} {...data}></ItemCard>
                    ))};
                </div>    
            </div>
        </>
    );
}
