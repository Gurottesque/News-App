import CardHome from "./CardHome";
import { useTheme } from './ThemeContext.jsx';

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
    
    const { isDarkMode } = useTheme();

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
        <div className={`${isDarkMode ? "bg-slate-950 text-slate-200" : "bg-gray-100  text-slate-950"} p-4`}>
        <h1 className="flex items-center justify-center text-5xl font-bold leading-loose">Breaking News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-screen-2xl m-auto">
            <CardHome />
            <CardHome />
            <CardHome />
            <CardHome />
            <CardHome />
            <CardHome />
        </div>
        <div className="flex justify-center gap-20">
            <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={previousPage}>Previous</button>
            <button className="bg-black text-white rounded-md px-5 py-2 hover:bg-slate-300 hover:text-black transition-colors" onClick={nextPage}>Next</button>
        </div>
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