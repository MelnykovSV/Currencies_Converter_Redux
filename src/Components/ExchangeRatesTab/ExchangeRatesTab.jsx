import * as S from "./ExchangeRatesTab.styled";
import { DASHBOARD_CURRENCIES } from "../../constants";
import { useSelector } from "react-redux";
import { selectCurrencyRates } from "../../redux/currencyRates/currencyRatesSlice";

export const ExchangeRatesTab = () => {
  const currencyRates = useSelector(selectCurrencyRates);
  return (
    <S.Container>
      {currencyRates ? (
        <ul>
          {DASHBOARD_CURRENCIES.map((currency) => (
            <li key={currency}>
              1 {currency} = {(1 / currencyRates[currency]).toFixed(2)} UAH
            </li>
          ))}
        </ul>
      ) : null}
    </S.Container>
  );
};
