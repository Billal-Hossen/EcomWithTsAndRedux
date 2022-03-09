import React, { useEffect, useState } from "react";
import ProductService from "../../../services/Product.service";
import HomeSlider from "../../../views/components/custom/HomeSlider";
import { AllProducts } from "../../../views/components/home/AllProducts";

const Home = () => {
  const [products, setProducts] = useState<[] | any[]>([]);
  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <HomeSlider />
      <AllProducts products={products} />
    </div>
  );
};

export default Home;
