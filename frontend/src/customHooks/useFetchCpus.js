import { useState, useEffect } from "react";

export const useFetchCpus = async (url) => {
    const result = await fetch(URL);

    result.json().then(json => {
        console.log(json);
        return {json};
    });
};
