import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductCard from '../components/ProductCard/ProductCard'
import { productData } from '../assets/assets';
import './CSS/Home.css';
const Home = () => {
  return (
    <div>
<Navbar /> 
<section className="hero-container">
      <div className="hero-content">
        <span className="hero-subtitle">NEW ARRIVALS 2026</span>
        <h1>The Next Generation <br /> of <span className="text-highlight">Comfort Tech</span></h1>
        <p>Discover high-performance laptops designed for your lifestyle. Up to 20% off this week.</p>
        <button className="hero-btn">SHOP NOW</button>
      </div>
      <div className="hero-image-box">
        {/* You can replace this with a transparent laptop PNG later */}
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000" alt="Featured Laptop" />
      </div>
    </section>
      <div className="product-grid">
  {productData.map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
</div>
    </div>
  )
}

export default Home