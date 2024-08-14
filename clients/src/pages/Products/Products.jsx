import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/Card";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div className="main-product-bord">Loading...</div>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
