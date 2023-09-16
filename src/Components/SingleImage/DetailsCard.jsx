import { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import './DetailsCard.css'

function DetailsCard()
{
    const [data, setDetailsData] = useState([])

    const {id} = useParams()

    async function getDetailsData()
    {
        const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        const {photo} = await resp.json();
        setDetailsData(photo)
    }
    console.log(data)

    useEffect(() => {
        getDetailsData();
    }, [])

    return (
        <div id="singlePhoto">
            <img src={data? data.url : 'None'} ></img>
            <div>
                <h1>{data? data.title : 'None'}</h1>
                <p>
                    {data? data.description : 'None'}
                </p>
            </div>
        </div>
    )
}


export default DetailsCard