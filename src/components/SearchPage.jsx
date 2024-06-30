import React, { useState, useEffect } from 'react';
import { useSearchArticleQuery } from "../api/NewsApi"
import Footer from './Footer';
import Navbar from './Navbar';



function CategorySelection({ setCategory, categories }) {
    return (
        <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
                <option value={category.uri} key={category.uri}>{category.label}</option>
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
            {results && results.map(result => (
                <div key={result.id}>{result.title}</div>
            ))}
        </div>
    );
}


function SearchPage() {
    const { dataCategorie } = useGetCategoriesQuery();
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    const { data, error, isLoading } = useSearchArticleQuery({ keyword: searchTerm, category });

    const handleSetSearchResults = () => {
        if (data) {
            setSearchResults(data);
        }
    };

    return (
        <>
            <Navbar />
            <SearchBar setSearchResults={handleSetSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CategorySelection setCategory={setCategory} categories={allCategories} />
            <SearchResults results={searchResults} />
            <Footer />
        </>
    );
}

export default SearchPage;
