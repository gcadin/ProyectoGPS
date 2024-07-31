import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = (props) => {

    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});
    const {children} = props;

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if(!token) {
                setCargando(false);
                return
            }

            const config = {
                headers: {
                    "content-type": "application/json",
                    authorization: token
                }
            }

            try {
                const {data} = await axios.get('http://146.83.198.35:1273/api/perfil', config)

                setAuth(data);
            } catch (error) {
                console.log(error);
            }

            setCargando(false);
            // console.log(token);
        }

        autenticarUsuario();
    }, [])

    const CerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth(null);
        
        window.location.reload();


    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                CerrarSesion
            }}
        >

            {children}

        </AuthContext.Provider>
    )

}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export{AuthProvider}

export default AuthContext;