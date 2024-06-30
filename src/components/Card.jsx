import { useEffect } from "react";
import { useGetTrendingHomeQuery } from "../api/NewsApi";
import { useState } from "react";

const Card = () => {
    const [articles, setArticles] = useState([]);
    const { data, error, isLoading } = useGetTrendingHomeQuery();
    useEffect(() => {;
        setArticles(data?.breakingEvents?.results);
    },[isLoading, data])
    console.log(articles);
    return (
        <>
        {articles !== undefined ? articles.map((article) => (
            <section className="container mx-auto p-6 md:p-12 transform duration-500">
                <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
                    <div className="overflow-hidden">
                        <img className="w-full h-auto transform hover:scale-110 duration-200" src={article.imgUrl} alt="" />
                    </div>
                    <div className="p-4 my-auto pb-8">
                        <h1 className="text-2xl font-semibold text-gray-800 mt-2">{article.title}</h1>
                        <p className="text-lg text-gray-400 mt-2 leading-relaxed">
                            {article.body}
                        </p>
                    </div>
                    <div className="border-t pt-4 pb-4 text-center text-sm text-gray-400 uppercase tracking-widest group-hover:text-gray-600 bg-gray-50">
                        {article.author}
                    </div>
                </article>
            </section>
            )) : null
        }
        </>
    );
  };

  export default Card;