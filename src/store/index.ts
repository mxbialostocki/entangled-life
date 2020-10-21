import { createSlice, configureStore } from "@reduxjs/toolkit"

import { INITIAL_STATE } from './state'

const basketSlice = createSlice({
  name: 'basket',
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      // add item to basket using `state` and `action` props
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1
        }
      })
    },
    remove: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return {
          ...item,
          added: false,
          quantity: 0
        }
      })
    },
    deleteProduct: (state, action) => {
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          added: false,
          quantity: 0
        }
      })
    }
  }
})

const store = configureStore({ reducer: basketSlice.reducer })

export const { add, remove, deleteProduct } = basketSlice.actions

export { basketSlice, store }