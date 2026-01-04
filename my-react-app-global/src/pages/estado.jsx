import Counter from "../components/Counter"
import ToggleButton from "../components/ToggleButton"
import NameForm from "../components/NameForm";

const App = () => {

  return (
    <div>
      <Counter/>
      <ToggleButton />
      <h2>Formulario de Nombre</h2>
      <NameForm />
    </div>
  )
}

export default App;

//useState es un Hook de React que permite agregar estado a los componentes funcionales.