import React, { useState } from 'react'
import '../css/ListaDeProducto.css';
import iconoModificar from '../images/iconoModificar.png';

export const ListaDeProducto = () => {
    const items = ["Sprite 3L", "Pepsi 3L", "Fanta 3L","CocaCola 3L"];
    
    return (
        <center id='fondo' className='responsive '>
            <div id='lista' className='container'>
            <h1 id='titulo'>Lista de Productos</h1>
            </div>
        <div className='row'>
         <div className='col-2'></div>   
         <div className='col-4' >
        <ul>
        {items.map((item, index) => (
          <li id='elemento' key={index}>
            <div className='row'>
            <div className='col-8'>
            <h3>{item}</h3>
            </div>
            <div className='col-4'>
           <a  href="">
             <img id='icono' src={iconoModificar} alt="click aqui para modificar" />
           </a>
           </div>
           </div>
          </li>

         ))}
       </ul>
       </div>
       </div>

        </center>
    )
}