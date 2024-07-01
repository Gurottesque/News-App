import React, { useEffect, useState } from "react";
import { useGetRelatedArticlesQuery } from "../api/NewsApi";
import Card from "./Card";

function ArticleDetailsRelated({ keyword }) {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [instances, setInstances] = useState([]);

  // Define los keywords que quieres buscar
  /* const keyword = articleDataInfo.title; */
  const { data, error, isLoading } = useGetRelatedArticlesQuery("Sports");
  console.log(data);

  

  useEffect(() => {
    if (data && data.articles && data.articles.results) {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < data.articles.results.length; i += chunkSize) {
        chunks.push(data.articles.results.slice(i, i + chunkSize));
      }
      setInstances(chunks);
      console.log("Chunks:", chunks);
    }
  }, [data]);

  // Funcion para mostrar los tres resultados siguientes
  const nextPage = () => {
    if (index < 96) {
      setIndex(index + 4);
    } else {
      setIndex(0);
      setPage(page + 1);
    }
  };

  // Funcion para mostrar los tres resultados anteriores
  const previousPage = () => {
    if (index > 0) {
      setIndex(index - 4);
    } else {
      setIndex(96);
      setPage(page - 1);
    }
  };

  return (
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
  );
}

export default ArticleDetailsRelated;
