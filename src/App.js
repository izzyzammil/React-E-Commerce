import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
