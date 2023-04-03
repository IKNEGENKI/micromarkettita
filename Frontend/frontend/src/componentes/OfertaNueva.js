import React, { useState } from 'react';
import swal from "sweetalert";
import logo from '../imagenes/registroicono.png';


import { Navbar, Nav } from "react-bootstrap";

function RegistrarOfertaNueva() {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');
  const [descripcion, setDescripcion] = useState('');
  
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const handleSubmit = (event) => {
    event.preventDefault();

    
    confirmarEnvio();

    handleReset();
  };
  
  const handleReset = () => {
    setProducto('');
    setPrecio('');
    setInicio('');
    setFin('');
    setDescripcion('');
  };
  function confirmarEnvio() {
    swal("La Oferta a sido registrada con exito", "", "success");
  }
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="col-sm-3 bg-secondary" id='navoferta'>
        <Navbar  expand="lg" className="flex-column text-white " id='ofertanav' >
          
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="flex-column ">
              <Nav.Link href="#home" className=" text-white ">
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                Agregar Oferta
              </Nav.Link>
              <Nav.Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      <div className="col-sm-9">
        <form className='container text-center'  onSubmit={handleSubmit}>
        <h1>Oferta Nueva</h1>
          <div className='row align-items-start'>
          <div className='col'>
          <label htmlFor="producto" >Producto*</label>
          <input list="productos" className="form-control "  id="producto" minlength="1" maxlength="6" required  name="producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
          <datalist id="productos">
            <option value="Manzana" />
            <option value="Banana" />
            <option value="Fresa" />
            <option value="Mango" />
          </datalist>
          <br />
          <label htmlFor="precio" >Precio venta*</label>
          <input type='number' className="form-control " id="precio" step="0.01"placeholder='precio*' min="0.5" max="999999"  required value={precio} onChange={(e) => setPrecio(e.target.value)} />
          <br />
          
          </div>

          <div className='col'>
          <label htmlFor="inicio">inicio oferta*</label>
          <input type="date" className="form-control " name="ini" min={formattedDate} id="inicio" placeholder='fecha-inicio*'required value={inicio} onChange={(e) => setInicio(e.target.value)} />
          <br />
          <label htmlFor="fin">fin oferta*</label>
          <input type= "date" className="form-control "  min={formattedDate} id="fin" placeholder='fecha-fin*'required value={fin} onChange={(e) => setFin(e.target.value)} />
          <br />
          
          </div>
          
          </div>
          <br />
          <label htmlFor="descripcion" className='container text-center'>descripcion*</label>
          <input type="text"className="form-control "  id="descripcion" placeholder='descripcion*'minlength="10" maxlength="100"required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          
          <br />
          <br />
          
          <button type="submit"  className="btn btn-primary mx-5">Guardar</button>
          <button type="button" onClick={handleReset} id='borrar' className="btn btn-danger mx-5">Cancelar</button>
         
        </form>
      </div>
    </div>
  </div>
  );
}

export default RegistrarOfertaNueva;
