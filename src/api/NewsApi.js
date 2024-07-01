import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = '2a524527-18c3-44db-82c5-ed5a4f7bb8af'
export const NewsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1/'
    }),

    endpoints: (builder) => ({
        getTrendingHome: builder.query({
            query: ({page}) => 
                `minuteStreamArticles?apiKey=${API_KEY}&page=${page}`
        }),

        searchArticle: builder.query({
            query: ({keyword, category, page}) => 
                `article/getArticles?keyword=${keyword}&apiKey=${API_KEY}&categoryUri=${category}&page=${page}`
        }),

        getRelatedArticles: builder.query({
            query: ({ query, page }) => 
                `suggestConceptsFast?prefix=${query}&lang=eng&apiKey=${API_KEY}&q=${query}&page=${page}`
        }),

        getArticle: builder.query({
            query: ({uri}) => 
                `article/getArticle?apiKey=${API_KEY}&articleUri=${uri}`
        })
    })
})


export const { useGetTrendingHomeQuery, useSearchArticleQuery, useGetRelatedArticlesQuery } = NewsApi;
