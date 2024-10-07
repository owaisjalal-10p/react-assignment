import React from "react";
import Menu from "./../component/menu";
import ProductList from "./../ProductList";
import SelectedProduct from "./../SelectedProduct";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <ProductList />
    </>
  );
};

export default Home;
