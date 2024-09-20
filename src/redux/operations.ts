import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoadMoreButtonType } from "../types";

export const getimages = createAsyncThunk(
  "getimages",
  async (values: LoadMoreButtonType, thunkApi) => {
    const params = {
      client_id: "JWj_bCNUx3Fd2nBL7E1nsdRQrLZyjwxfSxU1LEDU88c",
      query: values.query,
      page: values.page,
      per_page: 12,
    };
    try {
      const responce = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params,
        }
      );
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
