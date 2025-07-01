import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Nav from "./components/nav";
import { ShopContextProvider } from "./context/shopContext";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <ShopContextProvider>
        <Router basename="/online-shop">
          <Nav onSearch={setSearchTerm} />
          <Routes>
            <Route path="/" element={<Shop searchTerm={searchTerm} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
