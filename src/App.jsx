import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SearchPage from "./components/SearchPage"

const HomePage = lazy( () => import("./components/HomePage"))
const ArticleDetails = lazy( () => import("./components/ArticleDetails"))


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense  fallback={<div>...</div>} >
          <HomePage/>
          </Suspense> } />
        <Route path="/search" element={
          <SearchPage />} />
        <Route path="/about/:articleUri" element={
          <Suspense  fallback={<div>...</div>} >
          <ArticleDetails />
          </Suspense> } />
          
      </Routes>
      <Footer />
    </>
  );
}

export default App
