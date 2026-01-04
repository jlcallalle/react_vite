import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // Estado inicial del contador
  // count → valor actual del estado
  // setCount → función para actualizar el estado

  return (
    <div className="card box">
      <h2>Contador simple</h2>
      <p>El contador está en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  )
}

export default Counter;