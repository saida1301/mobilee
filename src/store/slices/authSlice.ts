import { registerThunk } from '../thunks/authThunk';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/authThunk";



export interface AuthState {
    user: {
        email: string
    };
    loading: 'reject' | 'pending' | 'fullfied' | null;
    error: string | null;
    token: string | null;
}

const initialState: AuthState = {
    user: {email: ""},
    loading: null,
    error: null,
    token: null,
};

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(loginThunk.fulfilled, (state, action : PayloadAction<{
            email: string
        }> ) => {
            console.log("Login fullfilled", action);
            state.user.email = action.payload.email
            state.loading = "fullfied";
        });
        builder.addCase(loginThunk.rejected, (state) => {
            state.loading = "reject";
        });

        builder.addCase(registerThunk.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            console.log("Register fullfilled", action);
            state.loading = "fullfied";
        });
        builder.addCase(registerThunk.rejected, (state) => {
            state.loading = "reject";
        });

      
      
    }
})


export default authSlice.reducer;