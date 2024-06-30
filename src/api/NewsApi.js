import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_KEY = '902c9441-a973-4483-ae9d-cee0a03f2bb8'
export const NewsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1/'
    }),

    endpoints: (builder) => ({


        // Devuelve las noticias más recientes
        // pageNumber: numero de página pedida
        // pageSize: numero de noticias por página
        getTrendingHome: builder.query({
            query: (pageNumber = 1, pageSize = 10) => `/event/getBreakingEvents?apiKey=${API_KEY}&breakingEventsPage=${pageNumber}&breakingEventsCount=${pageSize}`
            })
        }),
})


export const { useGetTrendingHomeQuery } = NewsApi;