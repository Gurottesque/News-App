import { useParams } from "react-router-dom";
import { useGetArticleQuery } from "../api/NewsApi";
import ArticleDetailsRelated from "./ArticleDetailsRelated";

function ArticleDetails() {
  const { articleUri } = useParams();
  const { data: uriData, isLoading, isError } = useGetArticleQuery({ uri: articleUri });


  if (isLoading) {

  let articleDataInfo; // Se declara articleDataInfoGlobalmente

    return <h1>Loading...</h1>;
  }

  if (isError || !uriData || !uriData[articleUri]) {
    return <h1>Error loading article</h1>;
  }

  const articleDataInfo = uriData[articleUri].info;

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
