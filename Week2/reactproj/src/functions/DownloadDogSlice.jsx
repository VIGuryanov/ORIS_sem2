import { useEffect, useState } from "react";
import PackDogArrayToCards from "./PackDogArrayToCards";
const DownloadDogSlice = (from, to) =>
{
    const [data, setData] = useState([]);

    useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',          
    },}

    fetch(`https://localhost:7053/dog/${from}/${to}`, requestOptions)
        .then(response => response.json())
        .then(data => setData(data))},[])
      
    return PackDogArrayToCards(data)    
}
export default DownloadDogSlice
