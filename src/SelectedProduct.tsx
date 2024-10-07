import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./reducer/cartSlice"; // Make sure to import your actions
import { RootState } from "./store";

const SelectedProduct = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div className="col-6">
      <h2>Selected Products</h2>
      <ul className="list-none">
        {Object.values(cart).map(({ product, count }) => (
          <li key={product.id} className="flex justify-content-between mb-2">
            {product.name} - ${product.price}
            <InputNumber
              value={count}
              onValueChange={(e: InputNumberValueChangeEvent) => {
                const newCount = e.value ?? 0;

                if (newCount < 1) {
                  dispatch(removeFromCart(product.id));
                } else {
                  const countChange = newCount - count;
                  dispatch(addToCart({ product, count: countChange }));
                }
              }}
              showButtons
              buttonLayout="horizontal"
              style={{ width: "4rem" }}
              decrementButtonClassName="p-button-secondary"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedProduct;
