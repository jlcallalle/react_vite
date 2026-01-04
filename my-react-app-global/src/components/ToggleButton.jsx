import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card box">
      <h2>Evento ToggleButton</h2>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Activo" : "Inactivo"}
      </button>
      <p>Valor actual: {String(isActive)}</p>
    </div>
  )
}

export default ToggleButton;