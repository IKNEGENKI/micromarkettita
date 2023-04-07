import React, { useState } from 'react';
import '../css/ListaDeProducto.css';
import { Button, Image, Modal } from 'react-bootstrap';
import iconoModificar from '../images/iconoModificar.png';
import ModificarProducto from './ModificarProducto';

export const ListaDeProducto = () => {
  const items = ["Sprite 3L", "Pepsi 3L", "Fanta 3L", "CocaCola 3L"];
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (index) => {
    setSelectedItem(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <center id="fondo" className="responsive ">
      <div id="lista" className="container">
        <h1 id="titulo">Lista de Productos</h1>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-4">
          <ul>
            {items.map((item, index) => (
              <li id="elemento" key={index}>
                <div className="row">
                  <div className="col-8">
                    <h3>{item}</h3>
                  </div>
                  <div className="col-4">
                    <a onClick={() => handleShowModal(index)}>
                      <img
                        id="icono"
                        src={iconoModificar}
                        alt="click aquí para modificar"
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModificarProducto item={items[selectedItem]} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </center>
  );
};
