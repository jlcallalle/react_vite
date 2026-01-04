import { useState, useEffect } from "react";

const SearchPosts = () => {
  const [query, setQuery] = useState(""); 
  //query captura el valor del input y setQuery lo actualiza
  const [posts, setPosts] = useState([]);
  //posts almacena los datos obtenidos de la API y setPosts los actualiza

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [query])

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {
          posts.map((posts) => (
            <li key={posts.id}>{posts.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchPosts;