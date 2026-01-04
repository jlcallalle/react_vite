import { useState, useEffect } from "react";

const SearchPosts = () => {
  const [query, setQuery] = useState(""); 
  const [posts, setPosts] = useState([]);
  //query captura el valor del input y setQuery lo actualiza
  //posts almacena los datos obtenidos de la API y setPosts los actualiza

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [query])

  return (
    <div className="card box">
      <h2>Lista de Usuarios</h2>
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
// https://jsonplaceholder.typicode.com/posts?title_like=molestias
