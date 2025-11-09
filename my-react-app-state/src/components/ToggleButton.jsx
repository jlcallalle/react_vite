import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Activo" : "Inactivo"}
      </button>
      <p>Valor actual: {String(isActive)}</p>
    </div>
  )
}

export default ToggleButton;