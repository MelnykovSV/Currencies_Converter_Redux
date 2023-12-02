import { configureStore } from "@reduxjs/toolkit";
import { currencyRatesReducer } from "./currencyRates/currencyRatesSlice";

export const store = configureStore({
  reducer: {
    currency: currencyRatesReducer,
  },
});
