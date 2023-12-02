import { createSlice } from "@reduxjs/toolkit";
import { isError, isPending } from "../statusCheckers";
import { getCurrencyRates } from "./operations";
import { BASE_CURRENCY } from "../../constants";

const initialState = {
  currencyRates: null,
  isLoading: false,
  error: null,
};

const currencyRatesSlice = createSlice({
  name: "currency",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencyRates.fulfilled, (state, action) => {
      state.currencyRates = { [BASE_CURRENCY]: 1, ...action.payload };
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isError, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const currencyRatesReducer = currencyRatesSlice.reducer;

export const selectIsLoading = (state) => state.currency.isLoading;
export const selectError = (state) => state.currency.error;
export const selectCurrencyRates = (state) => state.currency.currencyRates;
