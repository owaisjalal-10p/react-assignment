import { useSelector } from "react-redux";
import { RootState } from "../store";
const useTotalProductCount = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  const totalCount = Object.values(cart).reduce(
    (acc, { count }) => acc + count,
    0
  );

  return totalCount;
};

export default useTotalProductCount;
