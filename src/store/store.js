import { configureStore } from '@reduxjs/toolkit'
import { managementSlice } from './managementSlice'

export default configureStore({
  reducer: {
    management: managementSlice.reducer,
  },
})
