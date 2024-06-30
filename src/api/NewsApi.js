import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = '902c9441-a973-4483-ae9d-cee0a03f2bb8'
export const NewsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1/'
    }),

    endpoints: (builder) => ({
        getTrendingHome: builder.query({
            query: (pageNumber = 1, pageSize = 20) => 
                `/event/getBreakingEvents?apiKey=${API_KEY}&breakingEventsPage=${pageNumber}&breakingEventsCount=${pageSize}`
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