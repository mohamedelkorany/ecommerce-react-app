import { Suspense, lazy } from "react";
import LayoutWithHeader from "../components/LayoutWithHeader";
import NotFound from "../pages/NotFound"
import { Route, Routes } from "react-router";
// import ProductsList from "../pages/ProductsList";
// import ProductsDetails from "../pages/ProductDetails";
// import Cart from "../components/Cart";
// import Register from "../pages/Register";
const ProductsList = lazy(() => import("../pages/ProductsList"));
const ProductsDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../components/Cart"));
const Register = lazy(() => import("../pages/Register"));


export default function RoutesList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route element={<LayoutWithHeader />}>
      <Route path="/" element={<ProductsList />} />
      <Route path="/product-details/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>

  );
}
