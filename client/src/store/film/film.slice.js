import {createSlice} from '@reduxjs/toolkit'

const FilmSlice = createSlice({
    name: 'films',
    initialState: {
        fetching: false, //récupérer quelque chose
        datas:[]
    },
    reducers: {
        actionRequestingData: (state) => {
            state.fetching = true;
            state.datas = []

        },
        actionReceivedData: (state, datas) => {
            state.fetching = false;
            state.datas = datas
        }
    }
})

export const { actionRequestingData, actionReceivedData } = FilmSlice.actions
export default FilmSlice.reducer