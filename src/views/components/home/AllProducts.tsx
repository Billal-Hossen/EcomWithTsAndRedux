import React from "react";
import { ProductCard } from "../common/ProductCard";

export const AllProducts = ({ products }: { products: any[] }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
