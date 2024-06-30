import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import CarouselImage from "./CarouselImage";
import { useGetArticleQuery, useGetRelatedArticlesQuery } from "../api/NewsApi";
import { useEffect, useState } from "react";
import Card from "./Card";

function RenderArticleDetails({ articleUri }) {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [instances, setInstances] = useState([]);

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

  // Define los keywords que quieres buscar
  const keyword = "plane";
  const { data, error, isLoading } = useGetRelatedArticlesQuery({ keyword });

  const {
    data: articleData,
    error: articleError,
    isLoading: articleIsLoading,
  } = useGetArticleQuery({ articleUti });

  console.log(articleData)

  useEffect(() => {
    if (data && data.articles && data.articles.results) {
      const chunkSize = 4;
      const chunks = [];
      for (let i = 0; i < data.articles.results.length; i += chunkSize) {
        chunks.push(data.articles.results.slice(i, i + chunkSize));
      }
      setInstances(chunks);
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-col items-center shadow-lg mx-auto p-10 justify-center md:flex-row">
        <div className="p-4">
          <img src="https://via.placeholder.com/300" alt="imagen" />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h1 className="text-3xl font-bold mb-2">
            {articleData ? articleData.title : "Loading..."}
          </h1>
          <p className="text-blue-700 mb-4">
            {articleData ? articleData.summary : "Loading..."}
          </p>
          <div className="flex items-center mb-4">
            <div className="text-sm text-gray-600">
              {articleData &&
                articleData.categories.map((category, index) => (
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
            Event Date: {articleData ? articleData.eventDate : "Loading..."}
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

function ArticleDetails() {
  const { articleUri } = useParams();

  return (
    <>
      <Navbar />
      <RenderArticleDetails articleUri={articleUri} />
      <Footer />
    </>
  );
}

export default ArticleDetails;
