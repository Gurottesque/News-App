import Navbar from "./Navbar"
import Footer from "./Footer"
import Card from "./Card"


const topCurrentNews = [
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: ""
    },
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: ""
    }
]

function MainPage(){
      // Funcion para mostrar los tres resultados siguientes
    const nextPage = () => {
        if(index < 98){
            setIndex(index+3);
        }else{
            setIndex(0);
            setPage(page+1)
        }
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
  
  

    );
    }
    
    // Funcion para mostrar los tres resultados anteriores
    const previousPage = () => {
        if(index === 0 && page === 1){
            return;
        }
        else if(index > 2){
            setIndex(index-3);
        }else{
            setIndex(99);
            setPage(page-1)
        }
    
    return (
    <>
        <button onClick={nextPage}>Next</button>
        <button onClick={previousPage}>Previous</button>
    </>
    );
}

function Home(){

    return (
    <>
      
        <Navbar />
        <MainPage />
        <Footer />
    </>
    );
}

export default Home;