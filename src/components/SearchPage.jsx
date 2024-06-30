<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useSearchArticleQuery } from "../api/NewsApi"
import {NEWS_CATEGORIES} from '../constants/categories';
import Footer from './Footer';
import Navbar from './Navbar';



function CategorySelection({ setCategory, categories }) {
    return (
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
                <option value={category.uri} key={category.uri}>{category.label.replace(/(dmoz\/)|(news\/)/, '')}</option>
            ))}
        </select>
    );
}

function SearchBar({ setSearchResults, searchTerm, setSearchTerm }) {
    return (
        <>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={setSearchResults}>Search</button>
        </>
    );
}

function SearchResults({ results }) {
    return (
        <div>
            {results && results.map((result) => (
                <div key={result.uri}>{result.title}</div>
            ))}
        </div>
=======
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
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
    );
}


<<<<<<< HEAD
function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');



    const { data, error, isLoading } = useSearchArticleQuery({ keyword: searchTerm, category });

    const handleSetSearchResults = () => {
        if (data) {
            console.log(data)
            setSearchResults(data.articles.results);
        }
    };

    return (
        <>
            <Navbar />
            <SearchBar setSearchResults={handleSetSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategorySelection setCategory={setCategory} categories={NEWS_CATEGORIES} />
            <SearchResults results={searchResults} />
            <Footer />
        </>
    );
}

export default SearchPage;
=======

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
    <section className="container mx-auto p-6 md:p-12 transform duration-500">
        <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
            <div className="overflow-hidden">
                <img className="w-full h-auto transform hover:scale-110 duration-200" src="https://www.artisticmoods.com/wp-content/uploads/tropicalia_by_mathiole-d31lvne.jpg" alt="" />
            </div>
            <div className="p-4 my-auto pb-8">
                <h1 className="text-2xl font-semibold text-gray-800 mt-2">Tropicalia</h1>
                <p className="text-lg text-gray-400 mt-2 leading-relaxed">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
                </p>
            </div>
            <div className="border-t pt-4 pb-4 text-center text-sm text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
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
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
=======
import React, { useState, useEffect } from 'react';
import { useSearchArticleQuery } from "../api/NewsApi"
import { NEWS_CATEGORIES } from '../constants/constants'; 

function CategorySelection({ setCategory, categories }) {
    return (
        <select className="m-3 h-10 rounded-xl w-30 p-2" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
                <option className="w-[200px] rounded-md border border-input bg-background px-4 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" value={category.uri} key={category.uri}>{category.label.replace(/(dmoz\/)|(news\/)/, '')}</option>
            ))}
        </select>
    );
}

function SearchBar({ setSearchResults, searchTerm, setSearchTerm }) {
    return (
        <>
            <input className='bg-gray-200 shadow rounded w-96 pl-3 h-10' placeholder='Write something' type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='bg-gray-900 text-white m-3 p-2 flex justify-center items-center rounded                                  ' onClick={setSearchResults}>Search</button>
        </>
    );
}

function SearchResults({ results }) {
    return (
        <div>
            {results && results.map((result) => (
                <div key={result.uri}>{result.title}</div>
            ))}
        </div>
    );
}

function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const { data, error, isLoading } = useSearchArticleQuery({ keyword: searchTerm, category });

    const handleSetSearchResults = () => {
        if (data) {
            console.log(data)
            setSearchResults(data.articles.results);
        }
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <CategorySelection setCategory={setCategory} categories={NEWS_CATEGORIES} />
                <SearchBar className="flex" setSearchResults={handleSetSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <SearchResults results={searchResults} />
        </>
    );
}

export default SearchPage;
>>>>>>> 9ded50788140697f07ac207ee1c774ffadf3b9c2
