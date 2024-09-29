import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Features/User/UserSlice'

const Store=configureStore({
    reducer:{
        user:userReducer
    },

})

export default Store