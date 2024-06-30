import Footer from "./Footer"
import Navbar from "./Navbar"

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
    return (
        <>

        </>
    );
}

function SearchBar() {
    return (
    <>

    </>
    );
}

function SearchResults() {
    return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2 space-y-2 md:space-y-0 p-4 gap-4">
            <Card />
            <Card />
            <Card />
        </div>
    </>
    );
}

function SearchPage (){
    return  (
    <>
        <Navbar />
        <SearchBar />
        <CategorySelection />
        <SearchResults />
        <Footer />
    </>
    );
}

export default SearchPage