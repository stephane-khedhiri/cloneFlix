import {createSlice} from '@reduxjs/toolkit'

export const ThemeSlice = createSlice({
    name: 'films',
    initialState: {
        value : 'dark'
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { toggleTheme } = ThemeSlice.actions

export default ThemeSlice.reducer