import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Restaurant from '../models/Restaurant'

type Product = {
  id: number
  price: number
}

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

type Delivery = {
  receiver: string
  address: Address
}

type Expires = {
  month: number
  year: number
}

type Card = {
  name: string
  number: string
  code: number
  expires: Expires
}

type Payment = {
  card: Card
}

type PurchasePayload = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<void, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  usePurchaseMutation
} = api
export default api
