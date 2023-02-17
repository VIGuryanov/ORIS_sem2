import { useEffect, useState } from "react";
const DownloadDogArray = () =>
{
    const [data, setData] = useState([]);

    useEffect(()=>{
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-api-key': 'live_QZuRcLLL9SWUEv9X7qIFQJaPl3EPQlnzDYkstKj8R9mJDwt2f67TgDVUEdvlQB0n'
    },}

    fetch('https://api.thedogapi.com/v1/images/search?format=json&order=ASC&limit=10&has_breeds=1', requestOptions)
        .then(response => response.json())
        .then(data => setData(data))},[])
      
    return (data)
    /*return (
        [
            {
              "breeds": [],
              "categories": [],
              "id": "e3c",
              "url": "https://25.media.tumblr.com/tumblr_m1yuqjfdy31qejbiro1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "2kj",
              "url": "https://25.media.tumblr.com/tumblr_m2frwgKzN01r6b7kmo1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "MTYzMjIxMA",
              "url": "https://25.media.tumblr.com/tumblr_maklk6AJiw1qhwmnpo1_400.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "ckk",
              "url": "https://cdn2.thecatapi.com/images/ckk.gif"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "ea7",
              "url": "https://25.media.tumblr.com/tumblr_m4qyhzpZts1qcxyrro1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "4m5",
              "url": "https://25.media.tumblr.com/tumblr_m44w9nI50Y1qzyqubo1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "fb",
              "url": "https://25.media.tumblr.com/tumblr_luihyxjWY51qzqffro1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "MTg5NzY0OQ",
              "url": "https://24.media.tumblr.com/tumblr_m87t24YOrf1qze0hyo1_500.jpg"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "bmf",
              "url": "https://24.media.tumblr.com/tumblr_ltq345HHij1qh9eixo1_500.png"
            },
            {
              "breeds": [],
              "categories": [],
              "id": "88n",
              "url": "https://cdn2.thecatapi.com/images/88n.gif"
            }
          ]
    )*/
}
export default DownloadDogArray