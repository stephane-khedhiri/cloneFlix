import {createSlice} from "@reduxjs/toolkit";

const ErrorSlice = createSlice({
    name:'errors',
    initialState: {
        status:false,
    },
    reducers: {
        actionAddError(state, action){
            state.status = true
            state.error= action.payload
            return state
        },
        actionRestError(state){
            state.status = false
            return state
        }
    }
})

export const {actionAddError, actionRestError} = ErrorSlice.actions
export default ErrorSlice.reducer