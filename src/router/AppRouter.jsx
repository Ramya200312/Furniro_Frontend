import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProductDetails from "../components/productdetails/ProductDetails";
import Cart from "../components/cart/Cart";
import ScrollToTop from "../components/common/ScrollToTop";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
