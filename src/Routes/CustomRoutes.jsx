import HomePage from "../Components/Hompage/HomePage";
import {Routes, Route} from 'react-router-dom'
import DetailsCard from "../Components/SingleImage/DetailsCard";
function CustomRoutes()
{
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<DetailsCard />} />
        </Routes>
    )
}

export default CustomRoutes

