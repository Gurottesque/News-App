import Home from "./components/HomePage"

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