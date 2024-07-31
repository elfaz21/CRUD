import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCards";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/products");
      console.log(response.data);
      setProducs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <Link
          to={"/create"}
          className="inline-block mt-4 shadow-md bg-red-500 rounded-sm px-4 py-2 text-white font-bold hover:bg-red-600 mx-5 hover:cursor-pointer"
        >
          Create a product
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  mt-5">
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      product={product}
                      getProducts={getProducts}
                    />
                  );
                })}
              </>
            ) : (
              <div>There is no product</div>
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
