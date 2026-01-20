import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { Filter, ArrowRight } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Filtering
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="products-page">
      
      {/* Page Header */}
      <div className="products-header">
        <div className="container">
          <h1>Our Machinery Range</h1>
          <p>Engineered for precision, speed, and GMP compliance.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar sticky-filter">
        <div className="container filter-container">
          <div className="filter-icon">
            <Filter size={20} /> <span>Filter:</span>
          </div>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button 
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container products-grid-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              {/* Image Area */}
              <div className="product-image">
                {/* Fallback if image doesn't exist yet */}
                <div className="placeholder-img">
                  <span>{product.model}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="model-tag">Model: {product.model}</p>
                <p className="product-desc">{product.description}</p>
                
                {/* Mini Specs Preview */}
                <div className="product-specs-mini">
                  {product.specs.slice(0, 2).map((spec, index) => (
                    <div key={index} className="spec-row">
                      <strong>{spec.label}:</strong> {spec.value}
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-view-details">
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Fallback */}
        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No machines found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;