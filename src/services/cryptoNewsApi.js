import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '2d76e68c8fmshaf84d15022d792bp11a022jsn35db6efc3ca7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({ 
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`)
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
