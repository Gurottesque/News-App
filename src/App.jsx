import React, { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SearchPage from "./components/SearchPage"
import ArticleDetails from "./components/ArticleDetails"

const HomePage = lazy( () => import("./components/HomePage"))


function App() {

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div className='w-full text-center text-5xl animate-bounce'>...</div>}>
          <HomePage />
        </Suspense>
          } />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about/:articleUri" element={<ArticleDetails />} />
      </Routes>
      <Footer /> 
    </>
  )
}

export default App

