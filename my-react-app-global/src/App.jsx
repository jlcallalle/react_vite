// import Basico from "./pages/basico"
// import Estados from "./pages/estado"
import StaticComponent from "./components/StaticComponent/StaticComponent"
import UserList from "./components/UserList/UserList"
import UserListWithLoading from "./components/UserListWithLoading/UserListWithLoading"
import SearchPosts from "./components/SearchPosts/SearchPosts"

import "./App.css"

function App() {
  return (
    <>
      {/* <Basico /> */}
      {/* <Estados /> */}
      <StaticComponent />
      <UserList />
      <UserListWithLoading />
      <SearchPosts />
    </>
  )
}

export default App
