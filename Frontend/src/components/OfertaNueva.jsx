
import React, { useState } from 'react';
import '../css/OfertaNueva.css';

//import logo from '../imagenes/registroicono.png';


//import { Nav } from "react";



export const OfertaNueva = () => {

    

  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const hoy = new Date();

  // Agregar un año a la fecha actual
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];

  
    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert('Acción realizada exitosamente');
      setProducto("");
      setPrecio("");
      setInicio("");
      setFin("");
      setDescripcion("");
      window.location.href = '/home';
    };
    const handleReset = () => {

      if((precio||producto||inicio||fin||descripcion) != ""){
        const confirmacion = window.confirm('¿Está seguro de que desea realizar esta acción?');
      if (confirmacion) {
        window.alert('Acción realizada exitosamente');
      setProducto("");
      setPrecio("");
      setInicio("");
      setFin("");
      setDescripcion("");
      window.location.href = '/home';
      } else {
        window.alert('Acción cancelada');
      }
      }else{
        window.location.href = '/home';
      }
      
    };
    
   
  
  
  return (
    <div id='fondo' className='responsive'>
      
        
          
        
          <form className='container text-center'  onSubmit={handleSubmit}>
          <h1>Oferta Nueva</h1>
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
  
            <div className='col'>
            <label htmlFor="inicio">Inicio de Oferta*</label>
            <input type="date" className="form-control " name="ini" min={formattedDate} max={maxFecha} id="inicio" placeholder='fecha-inicio*'required value={inicio} onChange={(e) => setInicio(e.target.value)} />
            <br />
            <label htmlFor="fin">Fin de Oferta*</label>
            <input type= "date" className="form-control "  min={inicio} max={maxFecha} id="fin" placeholder='fecha-fin*'required value={fin} onChange={(e) => setFin(e.target.value)} />
            <br />
            
            </div>
            
            </div>
            <br />
            <label htmlFor="descripcion" className='container text-center'>Descripción*</label>
            <input type="text"className="form-control "  id="descripcion" placeholder='descripcion*'minlength="10" maxlength="100"required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            
            <br />
            <br />
            
            <button type="submit" onClick={handleSubmit} className="btn mx-5" id='guardar'>Guardar</button>
            <button type="button" onClick={handleReset} id='borrar' className="btn mx-5">Cancelar</button>
           
          </form>
        </div>
      
    )
  }
  //export const RegistrarOfertaNueva();
