import { useState } from "react";
import ToggleButton from "../components/ToggleButton"

const Counter = () => {
  const [count, setCount] = useState(0);
  // Estado inicial del contador
  // count → valor actual del estado
  // setCount → función para actualizar el estado
  return (
    <div className="wrap box">
      <div className="card box">
        <p>El contador está en: {count}</p>
        <p>Funcion actualizar: {setCount}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
      <ToggleButton />
    </div>
  )
}

export default Counter;

//useState es un Hook de React que permite agregar estado a los componentes funcionales.