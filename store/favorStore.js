import { createSlice } from "@reduxjs/toolkit";

const favorStore = createSlice({
    name: 'favor',
    initialState: [],
    reducers: {
        add: (state, action) => {
            console.log('Add: ', action.payload) 
            const activeItem = state.find(item => item.id === action.payload.id)
            if( activeItem ) {
                state.map(item => {
                    if( item.id === action.payload.id) {
                        item.status = action.payload.status
                    }
                    return item
                })
                return state
            } else {
                state.push(action.payload)
            }
        },
        remove: (state, action) => {
            console.log('Remove: ', action.payload)
            return state.filter(item => item.id !== action.payload.id)
            console.log('List remove: ', state)
        }
    }
})

export const { add, remove } = favorStore.actions
export default favorStore.reducer