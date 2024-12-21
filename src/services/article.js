import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
console.log(import.meta.env.VITE_RAPID_API_KEY);

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) =>{
            console.log(rapidApiKey);
            headers.set('x-rapidapi-key','d40860b3b8msh21d136779a73e76p1acc4bjsn4b53c202d418');
            headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder)=>({
        getSummary : builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const {useLazyGetSummaryQuery} = articleApi;