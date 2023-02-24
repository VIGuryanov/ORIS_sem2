import { useEffect, useState } from "react";
import PackDogArrayToCards from "./PackDogArrayToCards";
async function DownloadFilteredDogArrayAsync(filterOption, filterFrom, filterTo)
{
    let i = await fetch(`https://localhost:7053/dog/${filterOption}/${filterFrom}/${filterTo}`)

    let json = await i.json();

    return PackDogArrayToCards(json)

    /*useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',          
    },}

     requestOptions)
        .then(response => response.json())
        .then(data => setData(data))},[])
      
    return PackDogArrayToCards(data)    */
}
export default DownloadFilteredDogArrayAsync