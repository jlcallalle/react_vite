import "../App.css";
import Card from "../components/Card"

/* function App() {
  return <div>¡Hola Mundo!</div>;
} */
const level = "basica";
function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section className="card box">
      <h1>¡Hola Mundo {level}!</h1>
      <Card title="Card 1" description="Esta es una descripción" />
      <Card title="Card 2" description="Esta es otra descripción" />
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
