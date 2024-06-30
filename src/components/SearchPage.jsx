import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react"
import { useSearchArticleQuery } from "../api/NewsApi"

const categories = [
    {
      "uri": "dmoz",
      "label": "dmoz",
      "parentUri": ""
    },
    {
      "uri": "news",
      "label": "news",
      "parentUri": ""
    },
    {
      "uri": "dmoz/Arts",
      "label": "dmoz/Arts",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Business",
      "label": "dmoz/Business",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Computers",
      "label": "dmoz/Computers",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Games",
      "label": "dmoz/Games",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Health",
      "label": "dmoz/Health",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Home",
      "label": "dmoz/Home",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Recreation",
      "label": "dmoz/Recreation",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Science",
      "label": "dmoz/Science",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Shopping",
      "label": "dmoz/Shopping",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Society",
      "label": "dmoz/Society",
      "parentUri": "dmoz"
    },
    {
      "uri": "dmoz/Sports",
      "label": "dmoz/Sports",
      "parentUri": "dmoz"
    },
    {
      "uri": "news/Arts_and_Entertainment",
      "label": "news/Arts and Entertainment",
      "parentUri": "news"
    },
    {
      "uri": "news/Business",
      "label": "news/Business",
      "parentUri": "news"
    },
    {
      "uri": "news/Environment",
      "label": "news/Environment",
      "parentUri": "news"
    },
    {
      "uri": "news/Health",
      "label": "news/Health",
      "parentUri": "news"
    },
    {
      "uri": "news/Politics",
      "label": "news/Politics",
      "parentUri": "news"
    },
    {
      "uri": "news/Science",
      "label": "news/Science",
      "parentUri": "news"
    },
    {
      "uri": "news/Sports",
      "label": "news/Sports",
      "parentUri": "news"
    }
  ]

function CategorySelection({ setCategory }) {
    return(
        <>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option value={category.uri} key={category.uri}>{category.label}</option>
                    ))}
                </select>
        </>
    )
}

function SearchBar({ setSearchResults, searchTerm, setSearchTerm }) {
    return(
        <>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={setSearchResults}>Search</button>
            
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
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState(categories[0].uri)

    const { data, error, isLoading } = useSearchArticleQuery({ keyword: searchTerm, category: category })

    const handleSetSearchResults = () => {
        setSearchResults(data)
    }

    console.log(searchResults)

    return (
        <>
            <Navbar />
            <SearchBar setSearchResults={handleSetSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategorySelection setCategory={setCategory}/>
            <SearchResults />
            <Footer />
        </>
    )
}

export default SearchPage