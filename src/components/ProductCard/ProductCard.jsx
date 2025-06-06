import { Link } from "react-router-dom";
import './ProductCard.css'
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
    </div>
  );
}
