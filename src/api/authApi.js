
import axios from 'axios';
import sha256 from 'crypto-js/sha256';

export const getSignature =  async() => {

    const res = await axios.create({baseURL: import.meta.env.VITE_API_URL}).get("timezone")

    const preSignature = `${import.meta.env.VITE_PRIVATE_KEY},${import.meta.env.VITE_PUBLIC_KEY},${res.data.timezone}` 

    const signature = sha256(preSignature).toString()
    return {
        "apiKey":import.meta.env.VITE_PUBLIC_KEY,
        "utcTimeStamp":res.data.timezone,
        signature
    }
}


export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    header: {
        "Bearer Token":localStorage.getItem("token")
    }
    
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

