import React, { useState, useEffect } from "react";
import axios from "axios";


axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
    const [ res, setRes ] = useState(null);
    const  [error, setError ] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getQuiz = () => {
            axios.get(url).then((response) => setRes(response.data))
            .catch((err) =>setError(err))
            .finally(() => setLoading(false));
        }
        getQuiz();
    }, [url]);

    return { res, error, loading}
};

export default useAxios;