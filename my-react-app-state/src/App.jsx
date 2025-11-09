// import CounterWithEffect from "./components/CounterWithEffect";
// import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import NameForm from "./components/NameForm";
import CounterWithEffect from "./components/CounterWithEffect";

import './App.css'

function App() {
  return (
    <>
      {/* <CounterWithEffect /> */}
      {/* <Counter /> */}
      <h1>Evento Toggle Button</h1>
      <ToggleButton />
      <h1>Formulario de Nombre</h1>
      <NameForm />
      <h1>Contado con efectos</h1>
      <CounterWithEffect />
    </>
  )
}

export default App
