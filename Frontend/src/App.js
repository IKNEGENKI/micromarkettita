//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AcercaDe } from './components/AcercaDe';
import {EliminarProducto} from './components/EliminarProducto';
import {ListaDeProducto} from './components/ListaDeProductos';
import {ModificarDatosDelNegocio} from './components/ModificarDatosDelNegocio';
import {OfertaNueva} from './components/OfertaNueva';
import { RegistrarProductoNuevo } from './components/RegistrarProductoNuevo';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/eliminarProducto" element={<EliminarProducto/>}/>
          <Route exact path="/listaProducto" element={<ListaDeProducto/>}/>
          <Route exact path="/modificarDatosN" element={<ModificarDatosDelNegocio/>}/>
          <Route exact path="/ofertaNueva" element={<OfertaNueva/>}/>
          <Route exact path="/registrarProductoN" element={<RegistrarProductoNuevo/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
