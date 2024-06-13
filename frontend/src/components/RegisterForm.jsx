import { useState } from "react";
import styles from "./RegisterForm.module.css";
//import './RegisterForm.module.css';

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "phone") {
            setPhone(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    return (
        <form className={styles.form}>
            <label className={styles.label}>
                Correo electrónico:
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
            </label>
            <label className={styles.label}>
                Número de teléfono:
                <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
            </label>
            <label className={styles.label}>
                Contraseña:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                />
            </label>
            <input type="submit" value="Registrarse" className={styles.input} />
        </form>
    );
}

export default RegisterForm;
