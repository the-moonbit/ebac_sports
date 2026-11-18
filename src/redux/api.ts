import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Definição da interface do Produto baseada no projeto
export interface ProductType {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProductsQuery } = api
