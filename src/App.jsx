import ArticleDetails from "./components/ArticleDetails"
import Home from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <Routes>
        <Route path = '/' element = {<ArticleDetails />} /> 
        <Route path = '/search' element = {<SearchPage />}/>
      </Routes>    
    </>
  )
}

export default App
