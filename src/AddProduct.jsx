import { useState } from "react";
import api from "./api/axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    await api.post("/products", formData);

    alert("Product Added!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2 w-full"
      />

      <button className="bg-blue-500 text-white px-4 py-2">
        Add Product
      </button>
    </form>
  );
}
