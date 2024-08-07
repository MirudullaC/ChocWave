import React from "react";
import "../Css/Aside.css";

function Aside() {
  return (
    <aside className="bg-light p-3 shadow-sm">
      <h2 className="mb-3">Product Categories</h2>
      <ul className="list-unstyled">
        <li className="category-item">Electronics</li>
        <li className="category-item">Clothing</li>
        <li className="category-item">Home & Kitchen</li>
        <li className="category-item">Books</li>
        <li className="category-item">Beauty & Personal Care</li>
        <li className="category-item">Sports & Outdoors</li>
        <li className="category-item">Toys & Games</li>
        <li className="category-item">Health & Wellness</li>
        <li className="category-item">Automotive</li>
        <li className="category-item">Jewelry</li>
        <li className="category-item">Furniture</li>
        <li className="category-item">Stationery</li>
      </ul>
    </aside>
  );
}

export default Aside;
