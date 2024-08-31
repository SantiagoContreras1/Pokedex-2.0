import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ContenedorPoke } from './ContenedorPoke'
import { BuscarPoke } from './BuscarPoke'
import { usePoke } from '../hooks/usePoke';

export const PokeApp = () => {

    const { handleGetPoke, arregloPoke } = usePoke();


  return (
    <>
        <ContenedorPoke arregloPoke={arregloPoke}/>
        <BuscarPoke arregloPoke={handleGetPoke}/>
    </>
  )
}
