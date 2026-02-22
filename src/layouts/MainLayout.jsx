import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FooterFeatures from "../components/footer/FooterFeatures";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const showFeatures = [
    "/shop",
    "/cart",
    "/checkout",
    "/comparison",
    "/contact",
    "/blog",
  ].some(route => pathname.startsWith(route));

  return (
    <>
      <Navbar />

      <main className={isHome ? "" : "min-h-screen px-4 py-6"}>
        <Outlet />
      </main>

      {showFeatures && <FooterFeatures />}

      <Footer />
    </>
  );
}

