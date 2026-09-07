import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/api";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async ()=> {
        const responce = await axios.get(`${API_URL}/categories/all`)
        return responce.data
    }
)

export const fetchProducts = createAsyncThunk(
    'productss/fetchProducts',
    async ()=> {
        const responce = await axios.get(`${API_URL}/products/all`)
        return responce.data
    }
)