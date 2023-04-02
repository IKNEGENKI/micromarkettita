import { Routes, Route } from 'react-router-dom';
//import Router1 from './rutas/Router1';
import index from "./rutas/index.html";
//import Usuario from './componentes/Usuario';
//import UserDelegado from './componentes/UserDelegado';
//import UserVen from './componentes/UserVen';
//import Router3 from './rutas/Router3';
//import ListItemsVen from './componentes/ListItemsVen';
//import { useState } from 'react';
//import { ProtectedRoute } from './rutas/ProtectedRoute';
//import VistaPdf from './componentes/VistaPdf';

 function App() {

  /*const [user, setUser] = useState(null)

  const login = () => {
    //request done
    setUser({
      id: 1,
      name: 'John',
      roles: ['admi']
    })
    const logout = () => setUser(null)
  }
*/
 return (
    <>
      <Routes>
        <Route path='/*' element={<index/>} />
        <Route />
      </Routes>
    </>
  );
}

export default App; 




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/