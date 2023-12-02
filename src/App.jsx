import "./App.css";
import * as S from "./App.styled";
import { useEffect } from "react";
import { Header, CurrenciesConverterTab, ErrorTab } from "./Components";
import { ModernNormalize } from "emotion-modern-normalize";
import { Loader } from "./UI";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyRates } from "./redux/currencyRates/operations";
import {
  selectIsLoading,
  selectError,
  selectCurrencyRates,
} from "./redux/currencyRates/currencyRatesSlice";

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const currencyRates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(getCurrencyRates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <ModernNormalize />
      <Header />
      <main>
        <div className="container">
          {isLoading && <Loader />}
          {currencyRates && !error ? <CurrenciesConverterTab /> : null}
          {!currencyRates && error ? <ErrorTab /> : null}
        </div>
      </main>
    </S.Container>
  );
};
