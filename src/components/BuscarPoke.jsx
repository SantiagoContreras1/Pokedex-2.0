import {useState} from 'react'

export const BuscarPoke = ({handleGetPoke}) => {

    const [nombre, setNombre] = useState('')

  return (
    <>
        <div className="container d-flex flex-row justify-content-center align-items-center mt-3 w-50">
            <form onSubmit={(e) => handleGetPoke(nombre, e)}>
                <input 
                    className="" 
                    type="text" 
                    onChange={(e) => setNombre(e.target.value)} 
                    value={nombre}
                />
                <input 
                    type="submit" 
                    className="btn btn-success" 
                    value="¡Busca a tu Pokemon!" 
                />
            </form>
        </div>
    </>
  )
}
