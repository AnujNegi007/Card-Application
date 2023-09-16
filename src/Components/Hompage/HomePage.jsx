import { useEffect, useState } from "react"
import ImageCard from "../Card/ImageCard";
import './HomePage.css'

function HomePage()
{
    const[data, setData] = useState([]);

    async function getData()
    {
        const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20")
        const {photos} = await response.json();
        setData(photos)
    }


    useEffect(() =>
    {
        getData()
    }, [])

    return (
        <div id="parent">
            {
                data? data.map((e,i)=>{
                    return <ImageCard id={e.id} url={e.url} key={i}/>
                  })
                :
                'Loading...'
            }
        </div>
    )
}

export default HomePage