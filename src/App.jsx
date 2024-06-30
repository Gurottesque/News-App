import { Routes, Route } from "react-router-dom"
import Home from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import './index.css'
function App() {

  return (
    <>
   
     <Routes>
        <Route path = '/' element = {<Home/>} /> 
        <Route path = '/search' element = {<SearchPage />}/>
      </Routes>   
    </>
  );
}

export default App