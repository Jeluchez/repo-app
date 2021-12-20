import {
    Routes,
    Route,
} from "react-router-dom";
import { Code } from "../components/profile/Code";
import { ProfileScreen } from "../components/profile/ProfileScreen";

// import { ClientScreen } from "../components/dashboard/ClientScreen";




export const DashBoardRoute = () => {

    return (
    
        <div className='profile__container'>

            {/* <Menu/> */}
            
            <Routes>
                <Route path='/profile' element={<ProfileScreen />} />
              
                

                <Route path='/' element={<ProfileScreen />}/>
            </Routes>
        </div>
    )
}
