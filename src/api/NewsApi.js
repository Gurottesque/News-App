import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = '902c9441-a973-4483-ae9d-cee0a03f2bb8'
export const NewsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1/'
    }),

    endpoints: (builder) => ({
        getTrendingHome: builder.query({
            query: () => `/event/getBreakingEvents?apiKey=${API_KEY}`
        }),

        searchArticle: builder.query({
            query: ({ keyword, category}) => `article/getArticles?keyword=${keyword}&apiKey=${API_KEY}&categoryUri=${category}`
            
        })
    }),


})


export const { useGetTrendingHomeQuery, useSearchArticleQuery } = NewsApi;