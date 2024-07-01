import React, { useState, useEffect, useCallback } from 'react';
import { useSearchArticleQuery } from "../api/NewsApi"
import { NEWS_CATEGORIES } from '../constants/categories'; 

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

    const [index, setIndex] = useState(0);

    const [page, setPage] = useState(1);    

    const nArticles = 9;
    
    // Funcion para mostrar los tres resultados siguientes
    const nextPage = () => {
        if(index <= (99-nArticles)){
            setIndex(index+nArticles);
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
        else if(index >= nArticles ){
            setIndex(index-nArticles);
        }else{
            setIndex(99);
            setPage(page-1)
        }
    }

    const { data, error, isLoading } = useSearchArticleQuery({ searchTerm, category, page });

    // const handleSetSearchResults = useCallback() => { // Linea cambiada para implementar paginado
    const handleSetSearchResults = useEffect(() => {
        if (!isLoading && data && data.articles.results){
            setSearchResults(data.articles.results.slice(index, index+nArticles));
        } else {
          setSearchResults([]); // reset search results
        }
    }, [data, index, page]);

    return (
        <div>
          <div>
              <div className='flex justify-center items-center'>
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
          data?.articles?.results && <SearchResults results={searchResults} />
        }
          </div>
          <button className="previousPage" onClick={previousPage}>previous</button>
          <button className="nextPage" onClick={nextPage}>next</button>
        </div>
    );
}



function SearchResults({ results }) {

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
        <div>
            {results && results.map((result) => (
                <div key={result.uri}>{result.title}</div>
            ))}
        </div>
    );
}



export default SearchPage;
