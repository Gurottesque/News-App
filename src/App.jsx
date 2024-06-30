<<<<<<< HEAD
import Home from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage"
import Navbar from "./components/Navbar"
import SearchPage from "./components/SearchPage"
import Footer from "./components/Footer"
import ArticleDetails from "./components/ArticleDetails"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />  
      <Navbar />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<ArticleDetails />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;

export default App
=======
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

>>>>>>> 9ded50788140697f07ac207ee1c774ffadf3b9c2
