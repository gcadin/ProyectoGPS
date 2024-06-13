import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from '../App.module.css'

//funcion que se encarga de mostrar la pagina principal
function Home({ navigate }) {
    const [count, setCount] = useState(0);
    return (
        <>
        <div className={styles.root}>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className= {styles.logo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={'${styles.logo} ${styles.react}'} alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className={styles.card}>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <button onClick={() => navigate("/login")}>
                Ingresar
            </button>
            <button onClick={() => navigate("/register")}>
                Registrar
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className={styles['read-the-docs']}>
            Click on the Vite and React logos to learn more
        </p>
        </>
    );
}

export default Home;