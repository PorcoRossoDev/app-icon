import { createSlice } from "@reduxjs/toolkit";

const favorStore = createSlice({
    name: 'favor',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state) => {
            console.log('REMOVE')
        }
    }
})

export const { add, remove } = favorStore.actions
export default favorStore.reducer