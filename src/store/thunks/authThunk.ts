import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';
export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data: { email: string, password:string }) => {
        const response = await axiosInstance.post('/auth/login', data);
        return response.data;
    }
)
export const registerThunk = createAsyncThunk(
    'auth/register',
    async (data: { email: string, fullName: string}) => {
        const response = await axiosInstance.post('/auth/register', data);
        return response.data;
    }
)

