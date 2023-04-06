import React from 'react'
import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'
import '../css/estilos.css'
import { Fragment } from 'react'
import {AiFillFileAdd} from "react-icons/ai"
import {VscNotebook} from "react-icons/vsc"
import {BsFillTrash3Fill} from "react-icons/bs"
import {BsShop} from "react-icons/bs"
import {HiClipboardDocumentList} from "react-icons/hi2"
import {MdSell} from "react-icons/md"
import {BiHomeHeart} from "react-icons/bi"
export const Header = () => {
  return (
    <>  
    
 
<header>

        
        <div class="icon__menu">
        <i class="fas fa-bars" id="btn_open"></i>
        </div>
    </header>

    <body id="body">
        
        <div class="items"> 
        
        <div class="name__page">
            <i class="fa-solid fa-store"></i>
            <h4>MicroMarket TITA</h4>
        </div>
            <nav className="menu navbar-expand-lg" >
           
            
            
                <div class="options__menu"> 
                    
                    <a href = "#">
                        <div class="option">
                            <i><BiHomeHeart/></i>
                             <a class ="button"><NavLink to="/home" className="nav-item nav-link text-center" >Inicio</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#">
                        <div class="option">
                            <i><VscNotebook/></i>
                             <a class ="button"><NavLink to="/registrarProductoN" className="nav-item nav-link text-center" >Registrar Producto</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#">
                        <div class="option">
                            <i><BsFillTrash3Fill/></i>
                             <a class ="button"><NavLink to="/eliminarProducto" className="nav-item nav-link text-center" >Eliminar producto</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#">
                        <div class="option">
                            <i><HiClipboardDocumentList/></i>
                             <a class ="button"><NavLink to="/listaProducto" className="nav-item nav-link text-center" >Lista de Productos</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#">
                        <div class="option">
                            <i><BsShop/></i>
                             <a class ="button"><NavLink to="/modificarDatosNrDatosNn" className="nav-item nav-link text-center" >Modificar datos de negocio</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#">
                        <div class="option">
                            <i><MdSell/></i>
                             <a class ="button"><NavLink to="/ofertaNueva " className ="nav-item nav-link text-center" >Registrar oferta nueva</NavLink></a>
                        </div>
                        
                    </a>
                    
                </div>

            </nav>
        </div>
        </body>
    </>
    
  )
}
