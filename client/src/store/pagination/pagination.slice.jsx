import {createSlice} from "@reduxjs/toolkit";

const PaginationSlice = createSlice({
    name: 'paginations',
    initialState: {
        pagination:{}
    },
    reducers: {
        actionAddPagination(state, data){
            state.pagination = data
        },
        actionRestPagination(state){
            state.pagination = {}
        }
    }
})
export const {actionAddPagination, actionRestPagination} = PaginationSlice.actions

export default PaginationSlice.reducer