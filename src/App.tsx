import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { fetchProduct } from "./service/api-service";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import { loadProduct } from "./reducer/productSlice";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const data = await fetchProduct();
      dispatch(loadProduct(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
