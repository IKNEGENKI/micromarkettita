
import React, { useState } from 'react';
import '../css/OfertaNueva.css';

//import logo from '../imagenes/registroicono.png';


//import { Nav } from "react";



export const ModificarDatosDelNegocio = () => {

    

  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState("");
  const [descripcion, setDescripcion] = useState("");
  


  const handleSubmit = (event) => {
    event.preventDefault();
   
    
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleReset();
    };
    const handleReset = () => {
  
      setProducto("");
      setPrecio("");
      setInicio("");
      setFin("");
      setDescripcion("");
    };
    
    handleReset();
  };
  const handleReset = () => {

    setProducto("");
    setPrecio("");
    setInicio("");
    setFin("");
    setDescripcion("");
    
    window.location.href = '/home';
  };
  
  return (
    <div id='fondo' className='responsive'>
      
        
          
        
          <form className='container text-center' id="formulario" onSubmit={handleSubmit}>
          <h1>Registro de Producto</h1>
          <br>
          </br>
            <div className='row align-items-start'>
            <div className='col'>
            <label htmlFor="producto" >Producto*</label>
            <input list="productos" className="form-control "  id="producto" minlength="1" maxlength="20" required  name="producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
            <datalist id="productos">
              <option value="Manzana" />
              <option value="Banana" />
              <option value="Fresa" />
              <option value="Mango" />
            </datalist>
            <br />
            <label htmlFor="precio" >Precio de Venta(bs)*</label>
            <input type='number' className="form-control " id="precio" step="0.01"placeholder='precio*' min="0.1" max="999999"  required value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <br />
            
            </div>
  
            <div className='col'>Precio de venta*
            <label htmlFor="inicio"></label>
            <input type='number' className="form-control " id="precio" step="0.01"placeholder='precio*' min="0.1" max="999999"  required value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <label htmlFor="fin">Imagen*</label>
            <input type='number' className="form-control " id="precio" step="0.01"placeholder='precio*' min="0.1" max="999999"  required value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <br />
            
            </div>
            
            </div>
            <br />
            <label htmlFor="descripcion" className='container text-center'>Descripción*</label>
            <input type="text"className="form-control "  id="descripcion" placeholder='descripcion*'minlength="10" maxlength="100"required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <br />
            <label htmlFor="descripcion" className='container text-center'>categoria</label>
            <input type="text"className="form-control "  id="descripcion" placeholder='descripcion*'minlength="10" maxlength="100"required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            
            <br />
            <br />
            <br />
            
            <button type="submit"  className="btn mx-5" class='guardar'>Guardar</button>
            <button type="button" onClick={handleReset} class='borrar' className="btn mx-5">Cancelar</button>
           
          </form>
        </div>
      
    )
  }
  //export const RegistrarOfertaNueva();