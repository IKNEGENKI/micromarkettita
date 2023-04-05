import React from 'react'
import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'
import '../css/estilos.css'
import { Fragment } from 'react'
export const Header = () => {
  return (
    <>  
    <body id="body">
        <ul class="nav__menu"> 
            
            <nav className="menu navbar-expand-lg" style={{color:"yellow"}}>
                

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" style={{color:"yellow"}}>
                    <span className="navbar-toggler-icon" style={{color:"yellow"}}></span>
                    <script src="../css/funciones.js">

                    </script>
                </button>

                <ul className="items">
                    <ul className='prueba'>  
                        <h4 className='boton'><NavLink to="/home" className="nav-item nav-link text-center" >Inicio</NavLink></h4>
                        <h4 className='boton'><NavLink to="/registrarProductoN" className="nav-item nav-link text-center" >Registrar Producto</NavLink></h4>
                        <h4 className='boton'><NavLink to="/eliminarProducto" className="nav-item nav-link text-center" >Eliminar producto</NavLink></h4>
                        <h4 className='boton'><NavLink to="/listaProducto" className="nav-item nav-link text-center" >Lista de Productos</NavLink></h4>
                        <h4 className='boton'><NavLink to="/modificarDatosNrDatosNn" className="nav-item nav-link text-center" >Modificar datos de negocio</NavLink></h4>
                        <h4 className='boton'><NavLink to="/ofertaNueva " className ="nav-item nav-link text-center" >Registrar oferta nueva</NavLink></h4>
                    </ul>
                </ul>

            </nav>
        </ul>
        </body>
    </>
    
  )
}
