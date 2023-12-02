import * as S from "./ErrorTab.styled";
import { selectError } from "../../redux/currencyRates/currencyRatesSlice";
import { useSelector } from "react-redux";

export const ErrorTab = () => {
  const error = useSelector(selectError);
  return (
    <S.Container>
      <h2>Error {error.status}</h2>
      <p>{error.message}</p>
    </S.Container>
  );
};
