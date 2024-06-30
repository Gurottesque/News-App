import Card from "./Card";

const topCurrentNews = [
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: "",
    },
    {
        title: "",
        summary: "",
        categories: "",
        eventDate: "",
    },
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
    }
    return (
    <>
    
        <h1 className="flex items-center justify-center mt-5 text-5xl font-bold">Breaking News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-screen-2xl m-auto">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className="flex justify-center gap-20 mb-5">
            <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={previousPage}>Previous</button>
            <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={nextPage}>Next</button>
        </div>
    </>
    );
}

function Home() {
  return(
    <> 
        <MainPage />
    </>
  );
}

export default Home;
