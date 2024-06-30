<<<<<<< HEAD
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
            query: ({ keyword }) => `article/getArticles?keyword=${keyword}&apiKey=${API_KEY}`
        }),

        getArticle: builder.query({
            query: (uri) => 
                `article/getArticle?apiKey=${API_KEY}&articleUri=${uri}`
        })
    })
})



=======
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



>>>>>>> 9ded50788140697f07ac207ee1c774ffadf3b9c2
export const { useGetTrendingHomeQuery, useSearchArticleQuery , useGetRelatedArticlesQuery, useGetArticleQuery } = NewsApi;