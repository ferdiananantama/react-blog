import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
        const [data, setData] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)

        useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        } 
        setTimeout(()=> {
            fetchData();
        }, 2000)
        },[url])


    return{data, loading, error};
}


export default useFetch ;