// Shop.js
import { PRODUCTS } from "../../data/products";
import Product from "./product";

const Shop = ({ searchTerm }) => {
  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row p-4">
      {filteredProducts.map((p) => (
        <Product key={p.id} data={p} />
      ))}
    </div>
  );
};

export default Shop;
