import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: null,  
    error: "",
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userInfo) => {
        const response = await axios({
            method: "POST",
            url: "https://book-shop-back-end-seven.vercel.app/login",
            headers: {
                "Content-Type": "application/json",
            },
            data: userInfo,
        });
        console.log(response.data)
        return response.data;
    }
);

const UserSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;  
            state.error = '';
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.data = null; 
            state.error = action.error.message;
        });
    }
});

export default UserSlice.reducer;
