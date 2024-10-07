import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  color: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  name,
  color,
  price,
  onAddToCart,
}) => {
  const header = (
    <img alt={name} src={imgSrc} style={{ width: "100%", height: "auto" }} />
  );

  const footer = (
    <>
      <Button
        label="Add to Cart"
        icon="pi pi-cart-plus"
        className="text-center"
        onClick={onAddToCart}
      />
    </>
  );

  return (
    <div className="card flex justify-content-center">
      <Card
        title={name}
        subTitle={`Color: ${color}`}
        footer={footer}
        header={header}
        className="md:w-25rem bg-cyan-100"
      >
        <small className="m-0">Price: ${price.toFixed(2)}</small>
      </Card>
    </div>
  );
};

export default ProductCard;
