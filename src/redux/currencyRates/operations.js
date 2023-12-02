import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";
import { API_KEY, BASE_CURRENCY, CURRENCIES } from "../../constants";

export const getCurrencyRates = createAsyncThunk(
  "currencyrates/getCurrencyRates",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `?apike=${API_KEY}&base_currency=${BASE_CURRENCY}&currencies=${CURRENCIES.join(
          ","
        )}`
      );
      const extractedCurrenciesData = Object.fromEntries(
        Object.values(response.data.data).map((item) => [
          [item.code],
          item.value,
        ])
      );

      return extractedCurrenciesData;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status || null,
      });
    }
  }
);
