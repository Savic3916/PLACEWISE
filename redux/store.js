import { configureStore } from "@reduxjs/toolkit";
import houseDataReducer from '../redux/houseDataSlice'

export const store = configureStore({
    reducer: {
        houseTypeData: houseDataReducer,
    },
})