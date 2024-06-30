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
