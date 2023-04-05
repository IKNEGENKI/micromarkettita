import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

export const ContentHome = () => {
  return (
    <div className='responsive'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                <img src={card1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">CESFAM PEDRO DE VALDIVIA</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Fundado en 1988, comenzó a funcionar como una Posta dependiente del aquel entonces Consultorio O'higgins.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={card2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">CESFAM LORENZO ARENAS</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Inició su funcionamiento en 1958 pero después de dos años resultó destruido tras el terremoto de 1960.</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={card3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">CESFAM DE CURICÓ</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Trabajadores se suman a paro indefinido de la salud por sueldos impagos. Sölo se atenderpan urgencias.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
