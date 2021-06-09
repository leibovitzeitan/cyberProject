import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface PathState {
  bgColor: string
}

// Define the initial state using that type
const initialState: PathState = {
  bgColor: 'bg-gray-100 dark:bg-gray-900',
}

export const pathSlice = createSlice({
  name: 'path',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeBg: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload ?? initialState.bgColor
    },
  },
})

export const { changeBg } = pathSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBgColor = (state: RootState) => state.path.bgColor

export default pathSlice.reducer