import Footer from "./Footer"
import Navbar from "./Navbar"
import '../index.css'

const searchResultsArray = [
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

function CategorySelection() {
    return
    <>
    </>
}

function SearchBar() {
    return
    <>
    </>
}

function SearchResults() {
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
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 space-y-2 md:space-y-0 p-4 gap-4">
            <Card />
            <Card />
            <Card />
            <button onClick={nextPage}>Next</button>
            <button onClick={previousPage}>Previous</button>
        </div>
      );
}

const Card = () => {
    return (
    <section class="container mx-auto p-6 md:p-12 transform duration-500">
        <article class="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
            <div class="overflow-hidden">
                <img class="w-full h-auto transform hover:scale-110 duration-200" src="https://www.artisticmoods.com/wp-content/uploads/tropicalia_by_mathiole-d31lvne.jpg" alt="" />
            </div>
            <div class="p-4 my-auto pb-8">
                <h1 class="text-2xl font-semibold text-gray-800 mt-2">Tropicalia</h1>
                <p class="text-lg text-gray-400 mt-2 leading-relaxed">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
                </p>
            </div>
            <div class="border-t pt-4 pb-4 text-center text-sm text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
                Matheus Lopes
            </div>
        </article>
    </section>

    );
  };


function SearchPage() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <CategorySelection />
            <SearchResults />
            <Footer />
        </>
    )
}

export default SearchPage