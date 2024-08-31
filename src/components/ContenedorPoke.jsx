import React from 'react'

export const ContenedorPoke = ({arregloPoke}) => {
  return (
    <>
        <div className="d-flex flex-row justify-content-center align-items-center row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            {arregloPoke.map((poke) => (
                <div key={poke.id} className="card">
                    <img src={poke.image} alt={poke.name} />
                    <div className="card-body">
                        <h5 className="card-title">{poke.name}</h5>
                        <p className="card-text">Type: {poke.type}</p>
                        <p className="card-text">Ability: {poke.ability}</p>
                    </div>
                </div>
            ))}
        </div>
    
    </>
  )
}
