import React, { useEffect, useState } from "react";
import { useGetRelatedArticlesQuery } from "../api/NewsApi";
import Card from "./Card";

function ArticleDetailsRelated({ keyword }) {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [instances, setInstances] = useState([]);

  const nArticles = 5; // Numver of recomended articles to show

  // Define los keywords que quieres buscar
  /* const keyword = articleDataInfo.title; */
  const { data, error, isLoading } = useGetRelatedArticlesQuery("Sports");

  useEffect(() => {
    if (data && data.articles && data.articles.results) {
      setInstances(data.articles.results.slice(index, index+nArticles));
    }
  }, [data]);

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

  return (
    <div>
      <div className="w-full flex flex-row justify-center gap-12 mb-4 mt-12">
        <div>
          <div className="w-full flex flex-row justify-center gap-12 mb-4 mt-12">
            <button
              className="p-3 px-8 bg-slate-300 rounded-lg"
              onClick={() => previousPage()}
            >
              Prev
            </button>
            <button
              className="p-3 px-8 bg-blue-500 rounded-lg"
              onClick={() => nextPage()}
            >
              Next
            </button>
          </div>
          {instances.length > 0 && (
              <div className="w-full bg-cyan-200 flex flex-row justify-center">
                {instances[Math.floor(index / 4)].map((relatedArticle, idx) => (
                  <Card
                    key={idx}
                    imagePath={
                      relatedArticle.image || "https://via.placeholder.com/200"
                    }
                    title={relatedArticle.title}
                    body={relatedArticle.body}
                  />
                ))}
              </div>
            )}
            
        </div>
      </div>
      <button className="previousPage" onClick={previousPage}>previous</button>
      <button className="nextPage" onClick={nextPage}>next</button>
    </div>
  );
}

export default ArticleDetailsRelated;
