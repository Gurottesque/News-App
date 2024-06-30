import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import CarouselImage from "./CarouselImage";
import { useGetRelatedArticlesQuery } from "../api/NewsApi";

const article = {
  title: "Sample Article Title",
  summary: "This is a brief summary of the article.",
  categories: ["Category1", "Category2"],
  eventDate: "2024-06-28",
};

function RenderArticleDetails() {
  /* const params = useParams(); */

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
    if (index === 0 && page === 1) {
      return;
    } else if (index > 3) {
      setIndex(index - 4);
    } else {
      setIndex(99);
      setPage(page - 1);
    }
  };

   // Define los keywords que quieres buscar
   const keyword = "plane";
   const { data, error, isLoading } = useGetRelatedArticlesQuery({ keyword });
   console.log(data);

  return (
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
        <div className="w-full bg-cyan-200 flex flex-row justify-center">
            
          <CarouselImage
            imgPath={"https://via.placeholder.com/200"}
            title="lorem ipsum dolor sit amet consectetur adipisicing elit. "
          />
          <CarouselImage
            imgPath={"https://via.placeholder.com/200"}
            title="Hola"
          />
          <CarouselImage
            imgPath={"https://via.placeholder.com/200"}
            title="Hola"
          />
          <CarouselImage
            imgPath={"https://via.placeholder.com/200"}
            title="Hola"
          />
        </div>
        
      </div>
    </div>
  );
}

function ArticleDetails() {
  return (
    <>
      <Navbar />
      <RenderArticleDetails />
      <Footer />
    </>
  );
}

export default ArticleDetails;
