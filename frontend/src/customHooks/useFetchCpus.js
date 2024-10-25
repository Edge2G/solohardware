import { useState, useEffect } from "react";

export function useFetchCpus(url) {
    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCpus(data);
                console.log(cpus.data);
            });
    }, []);

    return { cpus };
}
