import { useState } from 'react'
import { reqPoke } from '../service/poke'

export const usePoke = () => {
    const [arregloPoke, setArregloPoke] = useState([])

    const handleGetPoke = async (nombre, e) => {
        e.preventDefault();
        
        await reqPoke(nombre).then((arregloPoke) => {
            setArregloPoke(arregloPoke);
        }) 
    }

    return {
        handleGetPoke,
        arregloPoke
    }
}
