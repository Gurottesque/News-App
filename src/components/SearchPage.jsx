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



function SearchResults({ results }) {
    return (
        <div>
            {results && results.map((result) => (
                <div key={result.uri}>{result.title}</div>
            ))}
        </div>
    );
}


}

export default SearchPage;