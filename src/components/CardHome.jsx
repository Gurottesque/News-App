import { useEffect } from "react";
import { useGetTrendingHomeQuery } from "../api/NewsApi";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardHome = () => {
    const [articles, setArticles] = useState([]);
    const { data, error, isLoading } = useGetTrendingHomeQuery();
    useEffect(() => {
        console.log(data)
        setArticles(data?.recentActivityArticles?.activity);
    },[isLoading, data])
    console.log(articles);
    return (
        <>
        {articles !== undefined ? articles.map((article) => (
            <Link to={`/about/${article.uri}`} key={article.uri}>
            <section key={article.uri} className="flex flex-1">
                <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
                    <div className="overflow-hidden">
                        <img className="w-full h-auto transform hover:scale-110 duration-200" src={article.image} alt="" />
                    </div>
                    <div className="p-4 my-auto pb-8 overflow-hidden">
                        <p className="text-2xl font-semibold text-gray-800 mt-2">{article.title}</p>
                    </div>
                </article>
            </section>
            </Link>
            )) : null
        }
        </>
    );
  };

  export default CardHome;

  
