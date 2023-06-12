import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '35c937f904msh6930a99820f2ee9p10dfd6jsn7516640ab822',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        GetCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        GetCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        })
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;