import { configureStore } from '@reduxjs/toolkit'
import favorReducer from './favorStore'

const store = configureStore({
    reducer: {
        favor: favorReducer
    }
})

export default store