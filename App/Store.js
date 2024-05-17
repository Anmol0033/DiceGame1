import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "../src/Reducers"

export const store = configureStore({
    reducer: rootReducer
})