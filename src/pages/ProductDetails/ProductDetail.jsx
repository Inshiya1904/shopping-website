import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './ProductDetail.css'
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
    <div className="product-detail-left">
       <img src={product.image} alt={product.title} />
    </div>
    <div className="product-detail-right">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
      
    </div>
  );
}
