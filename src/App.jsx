import Home from "./components/HomePage"
import { Routes, Route } from "react-router-dom"
import SearchPage from "./components/SearchPage"

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>} /> 
        <Route path = '/search' element = {<SearchPage />}/>
      </Routes>    
    </>
  )
}

export default App
