import { useState } from "react";
import styles from './LoginForm.module.css'
//import "./LoginForm.css"
//import '../index.css'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
  };

  return (
    <form className = {styles.form}>
      <label className= {styles.label}>
        Correo electrónico:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
          className= {styles.input}
        />
      </label>
      <label>
        Número de teléfono:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          required
          className = {styles.input}
        />
      </label>
      <input type="submit" value="Iniciar Sesión" className = {styles.input}  />
    </form>
  );
}
export default LoginForm;
