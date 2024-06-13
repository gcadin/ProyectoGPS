import { useState, useEffect } from 'react'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'


//manejo de rutas
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {window.removeEventListener('popstate', handlePopState);};
  }, []);

  let Component;
  switch (currentPath) {
    case '/login':
      Component = LoginForm;
      break;
    case '/register':
      Component = RegisterForm;
      break;
    default:
      Component = (props) => <Home {...props} navigate={navigate} />;
      break;
  }

  return (
    <>
      <Component />
    </>
  );
}

//pagina a mostrarse
export default App
