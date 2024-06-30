import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = 'a5135f92-05f6-415a-ab3b-cbe237d78031'
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
            query: (query) => 
                `suggestConceptsFast?prefix=${query}&lang=eng&apiKey=${API_KEY}&q=${query}`
        }),

        getArticle: builder.query({
            query: (uri) => 
                `article/getArticle?apiKey=${API_KEY}&articleUri=${uri}`
        })
    })
})



export const { useGetTrendingHomeQuery, useSearchArticleQuery } = NewsApi;
