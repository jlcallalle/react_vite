import Counter from "../components/Counter"
import ToggleButton from "../components/ToggleButton"

const App = () => {
  /* const [count, setCount] = useState(0); */
  // Estado inicial del contador
  // count → valor actual del estado
  // setCount → función para actualizar el estado
  return (
    <div>
      <Counter/>
      <ToggleButton />
    </div>
  )
}

export default App;

//useState es un Hook de React que permite agregar estado a los componentes funcionales.