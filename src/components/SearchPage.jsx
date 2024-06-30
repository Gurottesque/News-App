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
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-2">Filter</h2>
            <label htmlFor="category" className="mb-1">Category</label>
            <div className="flex flex-col items-center">
                <select name="category" className="px-3 py-2 border rounded-md mb-2">
                <option value="politics">Politics</option>
                <option value="business">Business</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
                </select>
                <button type="submit" className="text-white bg-gray-900 font-bold py-2 px-4 rounded">
                Apply Filters
                </button>
            </div>
        </div>



    )
}

function SearchBar({ placeholder = 'Search news...' }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="border rounded p-2 shadow focus:outline-none focus:border-black"
        />
    );
}



function SearchResults() {

    return
    <>
    </>
}

function SearchPage (){ 
    return (
    <>
        <Navbar />
        <SearchBar/>
        <CategorySelection />
        <SearchResults />
        <Footer />
    </>
    )
}

export default SearchPage