
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import ArticleDetails from "./components/ArticleDetails"


function App() {

  return (
    <>
      <Navbar />
       
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about/:articleUri" element={<ArticleDetails />} />
      </Routes>
      <Footer /> 
    </>
  )
}

export default App
