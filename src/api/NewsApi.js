import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = '4b7e322f-c7f0-4fce-ab5d-466cdc5398aa'
export const NewsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1/'
    }),

    endpoints: (builder) => ({
        getTrendingHome: builder.query({
            query: (pageNumber = 1, pageSize = 20) => 
                `/event/getBreakingEvents?apiKey=${API_KEY}&breakingEventsPage=${pageNumber}&breakingEventsCount=${pageSize}&eventImageCount=1`
        }),

        searchArticle: builder.query({
            query: (keyword) => 
                `article/getArticles?keyword=${keyword}&apiKey=${API_KEY}`
        }),

        getRelatedArticles: builder.query({
            query: ({ keyword }) => `article/getArticles?keyword=${keyword}&apiKey=${API_KEY}`
        }),
        
        getArticle: builder.query({
            query: (uri) => 
                {`article/getArticle?apiKey=${API_KEY}&articleUri=${uri}`
                console.log(uri);}
        })
    })
})



export const { useGetTrendingHomeQuery, useSearchArticleQuery , useGetRelatedArticlesQuery, useGetArticleQuery } = NewsApi;