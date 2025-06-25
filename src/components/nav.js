import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import "./nav.css";

const Nav = ({ onSearch }) => {
  const { cartItems } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");

  const itemCount = cartItems.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log("Search term:", value);
    onSearch(value); // Notify parent
  };

  return (
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          ata kaamkaar codding online shop
        </a>
        <form className="d-flex ms-auto me-2" role="search">
          <input
            type="search"
            placeholder="Search products..."
            className="form-control"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>

        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3">
            <Link to="/" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && (
                <span className="cart-items-count">{itemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
