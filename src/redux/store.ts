import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { api } from './api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Tipos utilitários recomendados pelo Redux para o TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
