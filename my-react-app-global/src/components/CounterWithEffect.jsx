import { useState, useEffect } from "react";

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect es un Hook que permite manejar efectos secundarios en componentes funcionales.
  // Se ejecuta después de que el componente se renderiza.
  useEffect(() => {
    console.log(`El contador cambió a: ${count}`)
  }, [count])
  //count, al estar en el array de dependencias, hace que el efecto se ejecute cada vez que count cambie.

  return (
    <div className="card box">
      <h2>Contador con useEffect</h2>
      <p>El contador está en: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

export default CounterWithEffect;