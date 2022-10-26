import {createSlice} from '@reduxjs/toolkit'

const FilmSlice = createSlice({
    name: 'films',
    initialState: {
        fetching: false, //récupérer quelque chose
        datas:{
            movie: [],
            tv: [],
        }
    },
    reducers: {
        actionRequestingData: (state) => {
            state.fetching = true;
            state.datas.movie = []
            state.datas.tv = []
        },
        actionReceivedDataMovie: (state, action) => {
            state.fetching = false;
            state.datas.movie = action.payload
        },
        actionReceivedDataTv: (state, action) => {
            state.fetching = false;
            state.datas.tv = action.payload
        }
    }
})

export const { actionRequestingData, actionReceivedDataMovie, actionReceivedDataTv } = FilmSlice.actions
export default FilmSlice.reducer