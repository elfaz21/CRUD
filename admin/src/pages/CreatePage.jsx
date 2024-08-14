import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();

    if (name === "" || quantity === "" || price === "" || image === "") {
      toast.error("Please fill in all necessary fields");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post("http://localhost:3000/product", {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
      });

      toast.success(
        `Data added to the backend successfully: ${response.data.name}`
      );
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Product</h2>
      <form className="space-y-4" onSubmit={createProduct}>
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter product image URL"
          />
        </div>

        <div>
          {!isLoading && (
            <button
              type="submit"
              className="inline-block bg-black text-white rounded-md px-4 py-2 font-semibold hover:bg-gray-800"
            >
              Create Product
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
