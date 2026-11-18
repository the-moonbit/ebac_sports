import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from './api'

interface CartState {
  items: ProductType[]
  favorites: ProductType[]
}

const initialState: CartState = {
  items: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload
      if (state.items.find((item) => item.id === product.id)) {
        alert('Item já adicionado ao carrinho')
      } else {
        state.items.push(product)
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    addFavorite: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload
      const index = state.favorites.findIndex((item) => item.id === product.id)
      if (index >= 0) {
        state.favorites.splice(index, 1)
      } else {
        state.favorites.push(product)
      }
    }
  }
})

export const { addCart, removeCart, addFavorite } = cartSlice.actions
export default cartSlice.reducer
