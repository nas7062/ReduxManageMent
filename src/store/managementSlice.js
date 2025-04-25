import { createSlice } from '@reduxjs/toolkit'

const savedList = JSON.parse(localStorage.getItem('list')) || []

let initialBalance = 0
let initialIncome = 0
let initialExpense = 0

savedList.forEach(({ price, type }) => {
  const num = Number(price)
  if (type === 'income') {
    initialBalance += num
    initialIncome += num
  } else {
    initialBalance -= num
    initialExpense += num
  }
})
const initialState = {
  list: savedList,
  balance: initialBalance,
  income: initialIncome,
  expense: initialExpense,
}

export const managementSlice = createSlice({
  name: 'management',
  initialState,
  reducers: {
    addList: (state, action) => {
      const { title, price, type } = action.payload
      const id = Date.now()
      const NumPrice = Number(price)
      const newList = {
        id,
        title,
        price: NumPrice,
        type,
      }
      if (type === 'income') {
        state.balance += NumPrice
        state.income += NumPrice
      } else {
        state.balance -= NumPrice
        state.expense += NumPrice
      }
      state.list.unshift(newList)
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    deleteList: (state, action) => {
      const id = action.payload
      const findList = state.list.find(item => item.id === id)
      if (findList) {
        if (findList.type === 'income') {
          state.income -= findList.price
          state.balance -= findList.price
        } else {
          state.expense -= findList.price
          state.balance += findList.price
        }
      }
      state.list = state.list.filter(item => item.id !== id)
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    editList: (state, action) => {
      const { id, title, price, type } = action.payload
      const findItem = state.list.find(item => item.id === id)
      if (findItem) {
        const prevPrice = findItem.price
        const prevType = findItem.type
        const newPrice = Number(price)

        if (prevType === 'income') {
          state.income -= prevPrice
          state.balance -= prevPrice
        } else {
          state.expense -= prevPrice
          state.balance += prevPrice
        }

        findItem.title = title
        findItem.price = newPrice
        findItem.type = type

        if (type === 'income') {
          state.income += newPrice
          state.balance += newPrice
        } else {
          state.expense += newPrice
          state.balance -= newPrice
        }

        localStorage.setItem('list', JSON.stringify(state.list))
      }
    },
  },
})

export const { addList, deleteList, editList } = managementSlice.actions
