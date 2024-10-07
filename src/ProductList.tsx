import React from "react";
import ProductCard from "./component/productCard";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { addToCart } from "./reducer/cartSlice";
import Product from "./types/Product";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.Product.value);
  const dispatch = useDispatch();

  return (
    <div className="grid mt-8 grid-nogutter">
      {products.map((product: Product) => (
        <div
          className="col-12 md:col-4 lg:col-6 xl:col-3 mb-3"
          key={product.id}
        >
          <ProductCard
            color={product.colour}
            name={product.name}
            price={product.price}
            imgSrc={product.img}
            onAddToCart={() => dispatch(addToCart({ product, count: 1 }))}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
