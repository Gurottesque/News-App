import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useGetRelatedArticlesQuery, useGetArticleQuery } from "../api/NewsApi";
import { useEffect, useState } from "react";
import Card from "./Card";

function ArticleDetails(articleUri) {
  return (
    <>
      <Navbar />
      <RenderArticleDetails articleUri={articleUri}/>
      <Footer />
    </>
  );
}

function RenderArticleDetails() {
  /* const params = useParams(); */

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [instances, setInstances] = useState([]);
  const [article, setArticle] = useState({});
  const {articleUri} = useParams();

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


  const {dataArticle, errorArticle, isLoadingArticle} = useGetArticleQuery(articleUri);
  const {data,error,isLoading} = useGetRelatedArticlesQuery({keyword: dataArticle?.keywords[0]});
  useEffect(() => {
    if (data && data.articles && data.articles.results) {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < data.articles.results.length; i += chunkSize) {
        chunks.push(data.articles.results.slice(i, i + chunkSize));
      }
      setInstances(chunks);
      /* console.log("Chunks:", chunks); */
    }
  }, [data]);

  
  useEffect(() => {
    console.log(dataArticle)
    setArticle(dataArticle);
    
  }, [dataArticle, isLoadingArticle, errorArticle])
  console.log("Article:", article);


  return (
    article?.categories && 
    <div>
      <div className="flex flex-col items-center shadow-lg mx-auto p-10 justify-center md:flex-row ">
        <div className="p-4">
          <img src="https://via.placeholder.com/300" alt="imagen" />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-blue-700 mb-4">{article.summary}</p>
          <div className="flex items-center mb-4">
            <div className="text-sm text-gray-600">
              {article.categories.map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Event Date: {article.eventDate}
          </div>
        </div>
      </div>
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

export default ArticleDetails;
