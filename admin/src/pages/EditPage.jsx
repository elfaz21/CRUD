import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditPage = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const getProduct = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct({
        name: response.data.name,
        quantity: response.data.quantity,
        price: response.data.price,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Error fetching product data. Please try again.");
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:3000/products/${id}`, product);
      toast.success(
        `Data Updated to the backend successfully: ${product.name}`
      );
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Update a Product - {product.name}
      </h2>
      <form className="space-y-4" onSubmit={updateProduct}>
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product price"
          />
        </div>

        <div>
          <label
            htmlFor="productQuantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product quantity"
          />
        </div>

        <div>
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-700"
          >
            Product Image
          </label>
          <input
            type="text"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product image URL"
          />
        </div>

        <div>
          {!isLoading && (
            <button
              type="submit"
              className="inline-block bg-blue-700 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-800"
            >
              Update Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditPage;
