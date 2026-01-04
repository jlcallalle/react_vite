const StaticComponent = () => {
  const items = ["Manzana", "Banana", "Cereza", "Fresa"];

  return (
    <div className="card box">
      <h2>Dato estáticos</h2>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default StaticComponent;