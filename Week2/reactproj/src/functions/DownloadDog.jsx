import { useEffect, useState } from "react";
const DownloadDog = (id) =>
{
    const [data, setData] = useState("");

    useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',          
    },}

    fetch(`https://localhost:7053/dog/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => setData(data))})
      
    return (data)
}
export default DownloadDog