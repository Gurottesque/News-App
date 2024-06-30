const Cardhome = () => {
    const [articles, setArticles] = useState([]);
    const { data, error, isLoading } = useGetTrendingHomeQuery();
    useEffect(() => {;
        console.log(data)
        setArticles(data?.breakingEvents?.results);
    },[isLoading, data])
    console.log(articles);
    return (
        <>
        {articles !== undefined ? articles.map((article) => (
            <section key={article.uri} className="">
                <article className="shadow-lg mx-auto relative max-w-sm group cursor-pointer">
                    <div className="overflow-hidden">
                        <img className="w-full h-auto transform hover:scale-110 duration-200" src={article.images[0]} alt="" />
                    </div>
                    <div className="p-4 my-auto pb-8 overflow-hidden">
                        <p className="text-2xl font-semibold text-gray-800 mt-2">{article.title[Object.keys(article.title)[0]]}</p>
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

  export default Cardhome;
