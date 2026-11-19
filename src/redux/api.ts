import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

export type ProductType = Produto

const produtosMock: ProductType[] = [
  {
    id: 1,
    nome: 'Camisa Oficial Brasil',
    preco: 299.9,
    imagem: 'https://placehold.co/400x400?text=Camisa+Brasil'
  },
  {
    id: 2,
    nome: 'Chuteira Campo Pro',
    preco: 449.9,
    imagem: 'https://placehold.co/400x400?text=Chuteira+Pro'
  },
  {
    id: 3,
    nome: 'Bola Futebol Oficial',
    preco: 159.9,
    imagem: 'https://placehold.co/400x400?text=Bola+Oficial'
  },
  {
    id: 4,
    nome: 'Meião Esportivo',
    preco: 49.9,
    imagem: 'https://placehold.co/400x400?text=Meiao'
  }
]

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      queryFn: async () => ({ data: produtosMock })
    })
  })
})

export const { useGetProductsQuery } = api