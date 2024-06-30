import Home from "./components/HomePage"
import SearchPage from "./components/SearchPage";
import { Route, Routes } from "react-router-dom";
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