import { Link } from "react-router-dom"

function ImageCard({url , id})
{
    return (
        <div>
            <Link to={`/${id}`}>
            <img src={url} alt="Phots"/>
            </Link>
        </div>
    )
}

export default ImageCard