import React, { useState, useEffect, useCallback } from 'react';
import { useSearchArticleQuery } from "../api/NewsApi"
import { NEWS_CATEGORIES } from '../constants/categories'; 
import Card from './Card';

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

    const handleSetSearchResults = useCallback(() => {
        if (!isLoading && data && data.articles.results){
            setSearchResults(data.articles.results);
        } else {
          setSearchResults([]); // reset search results
        }
    }, [data]);

    return (
        <>
            <div className='flex justify-center items-center '>
                <h1 className= "text-xl font-bold mb-4 mt-4 mr-2"> Filters</h1>
                <CategorySelection setCategory={setCategory} categories={NEWS_CATEGORIES} />
                <SearchBar className="flex" setSearchResults={handleSetSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            {
        isLoading && <div>Loading...</div>
      }
      {
        error && <div>Error: {error}</div>
        
      }
      {
        data?.articles?.results && <SearchResults results={data.articles.results} />
      }
        </>
    );
}



function SearchResults({ results }) {
    console.log(results)
    const [category, setCategory] = useState('');
    const { data, error, isLoading } = useSearchArticleQuery({category });

    return (
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-10 max-w-screen-2xl m-auto col-span-3">
             {results && results.map((result) => (
               <div key = {result.uri} >
                 <Card
                 title= {`${result.title}`}
                 imagePath= {`${result.image}`}
                 body={null} />
               </div>   
               ))}
           </div>
        </div>
    );
}



export default SearchPage;
