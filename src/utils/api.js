import axios from 'axios';
import sha256 from 'crypto-js/sha256';
export const signature =  async() => {

    const res = await axios.get("timezone")

    const preSignature = `${import.meta.env.VITE_PRIVATE_KEY},${import.meta.env.VITE_PUBLIC_KEY},${res.data.timezone}` 

    const signature = sha256(preSignature).toString()
    return {
        "apiKey":import.meta.env.VITE_PUBLIC_KEY,
        "utcTimeStamp":res.data.timezone,
        signature
    }
}