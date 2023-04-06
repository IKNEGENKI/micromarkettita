import React, { useState } from 'react';
//dentro de la funcion return va el codigo que se va a ejecutar
export const EliminarProducto = () => {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'CocaCola 3L', seleccionado: false },
    { id: 2, nombre: 'Fanta 3L', seleccionado: false },
    { id: 3, nombre: 'Sprite 3L', seleccionado: false },
    { id: 4, nombre: 'Swichdawner', seleccionado: false }
  ]);

  const [productoEliminado, setProductoEliminado] = useState(false);

  const handleSubmit = (event) => {
   event.preventDefault();

  const productosAEliminar = productos.filter((producto) => producto.seleccionado);

  if (productosAEliminar.length > 0) {
    if (window.confirm(`¿Está seguro que desea eliminar los siguientes productos: ${productosAEliminar.map((producto) => producto.nombre).join(', ')}?`)) {
      // Lógica de eliminación de productos
      const nuevosProductos = productos.filter((producto) => !producto.seleccionado);
      setProductos(nuevosProductos);
      console.log('Productos eliminados:', productosAEliminar);
    }
  } else {
    window.alert('Debe seleccionar al menos un producto para eliminar.');
  }
  };

  const handleReset = () => {
    setProductos(productos.map((producto) => ({ ...producto, seleccionado: false })));
  };

  const handleProductoSelection = (id) => {
    setProductos(productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, seleccionado: !producto.seleccionado };
      }
      return producto;
    }));
  };


  return (
    <div className='responsive'>
      <form className='container text-center' onSubmit={handleSubmit}>
        <h1>Eliminar Producto</h1>
        <div className='row align-items-start'>
          <div className='col'>
            <ul className='list-group'>
              {productos.map((producto) => (
                <li key={producto.id} className='list-group-item'>
                  <div className='form-check'>
                    <input className='form-check-input' type='checkbox' value={producto.seleccionado} onChange={() => handleProductoSelection(producto.id)} />
                    <label className='form-check-label' htmlFor='flexCheckDefault'>
                      {producto.nombre}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <br />
        <br />
        <button type='button' onClick={handleReset} id='borrar' className='btn btn-danger mx-5'>Cancelar</button>
        <button type='submit' className='btn btn-primary mx-5'>Eliminar</button>
      </form>
    </div>
)   
}