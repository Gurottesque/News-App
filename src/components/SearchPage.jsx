import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react"
import { useSearchArticleQuery } from "../api/NewsApi"

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

function SearchBar({ setSearchResults }) {
    const [searchTerm, setSearchTerm] = useState("")
    const { data } = useSearchArticleQuery(searchTerm)

    return(
        <>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={() => setSearchResults(data)}>Search</button>
        </>
    )
}

function SearchResults() {
    return
    <>
    </>
}

function SearchPage (){
    const [searchResults, setSearchResults] = useState({})

    console.log(searchResults)

    return (
        <>
            <Navbar />
            <SearchBar setSearchResults={setSearchResults} />
            <CategorySelection />
            <SearchResults />
            <Footer />
        </>
    )
}

export default SearchPage