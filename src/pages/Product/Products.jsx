import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Products.css'


export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(product =>
    product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-card-container">
      <h1>Lastest Collection</h1>
      <div className="search-bar">
      <h4>Shop by Category...</h4>
       <input 
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      
      <div className="product-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
