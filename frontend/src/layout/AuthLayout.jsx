import { Outlet } from 'react-router-dom'

import Header from './Header';


const AuthLayout = ( navigate ) => {
    return (
        <>
            <Header navigate={navigate}/>


            <Outlet/>




        </>
    )

};

export default AuthLayout;