import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Menu from '../../models/Menu'

type CartState = {
  items: Menu[]
  total: number
  isOpen: boolean
}
const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.total += action.payload.preco
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      )
      if (itemToRemove) {
        state.total -= itemToRemove.preco
      }

      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
