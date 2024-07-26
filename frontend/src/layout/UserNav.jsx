import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserHeader from './UserHeader'

const UserNav = () => {

    const { auth, cargando } = useAuth();

    // console.log(auth);
    // console.log(cargando);

    if(cargando) return 'cargando...'


    return (
        <>
            <UserHeader/>

            {auth?._id ? <Outlet />: <Navigate to='/login' />}
        </>
        
    )
}

export default UserNav;