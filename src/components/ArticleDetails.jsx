import { useGetArticleQuery } from "../api/NewsApi";
import ArticleDetailsRelated from "./ArticleDetailsRelated";

function ArticleDetails({ articleUri }) {
  const uri = articleUri;
  const uriData = useGetArticleQuery({ uri });

  let articleDataInfo; // Se declara articleDataInfoGlobalmente

  if (uriData.isLoading) {
    return <h1>Loading...</h1>;
  } else {
    articleDataInfo = uriData.data[uri].info;
    /* console.log("uriDAta", articleDataInfo); */
  }


function RenderArticleDetails() {
  /* const params = useParams(); */
  const [instances, setInstances] = useState([]);
  const [article, setArticle] = useState([]);
  const {articleUri} = useParams();

  const [index, setIndex] = useState(0);

  const [page, setPage] = useState(1);    

  const nArticles = 5; // Numver of recomended articles to show

  // Funcion para mostrar los tres resultados siguientes
  const nextPage = () => {
    if(index < (99-nArticles)){
        setIndex(index+nArticles);
    }else{
        setIndex(0);
        setPage(page+1);
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
        setPage(page-1);
    }
}

  useEffect(() => {
    const {data,error,isLoading} = useGetRelatedArticlesQuery({keyword: dataArticle.keywords[0], page});
    if (data && data.articles && data.articles.results) {
      const chunkSize = 4;
      const chunks = [];
      for (let i = index; i < index + nArticles; i += chunkSize) {
        chunks.push(data.articles.results.slice(index, index + chunkSize));
      }
      setInstances(chunks);
      /* console.log("Chunks:", chunks); */
    }
  }, [ index, page ]);

  return (
    <div>
      <div className="flex flex-col items-center shadow-lg mx-auto p-10 justify-center ">
        <div className="p-4">
          <img src={articleDataInfo.image} alt="imagen" />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h1 className="text-5xl font-bold text-slate-950 mb-2">
            {articleDataInfo.title}
          </h1>
          <p className="text-lg text-gray-900 mb-4 mt-4">
            {articleDataInfo.body}
          </p>
          <div className="text-sm text-gray-600">
            Date: {articleDataInfo.date}
          </div>
        </div>
      </div>

      <ArticleDetailsRelated keyword={articleDataInfo.title} />
    </div>
  );
}

export default ArticleDetails;
