import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";


export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const res = await api.post("/auth/login", formData);

      // Store JWT token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("guestId", res.data.user_id);

      window.dispatchEvent(new Event("login"));

      alert("Login successful!");

      // Clear form
      setFormData({
        email: "",
        password: "",
      });

      // Redirect to home page
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-white p-8 rounded-xl shadow-md w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="current-email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#B88E2F] text-white py-2 rounded border border-[#B88E2F] transition duration-300 hover:bg-white hover:text-[#B88E2F]"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}
