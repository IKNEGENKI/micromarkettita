import React from 'react'
//dentro de la funcion return va el codigo que se va a ejecutar
export const ModificarDatosDelNegocio = () => {
    return (
        <center className='responsive'>
            
        <div className="container" style={{width: "70%", marginTop:20, background:"#a8bcff"}}>Oferta</div>
            <form id="miFormulario">
                <h1 className='h1'> Mensajes</h1>
                <input className="form-control form-control-lg" type = "text" placeholder="Digite su nombre" ></input>
                <input className="form-control form-control-lg" type="email" placeholder="digite su correo"></input>
                <textarea className="form-control form-control-lg" placeholder="digite su mensaje">
                    <button className="btn btn-primary btn-lg"> Enviar </button>
                </textarea>
            </form>

        </center>
    )
}