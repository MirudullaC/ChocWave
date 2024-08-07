import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { products } from "../Data";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <Row className="my-5">
      <h1>Products</h1>
      {products.map((product, index) => (
        <Col xxl={2} xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
          <ProductCard
            imageSrc={product.imageSrc}
            altText={product.altText}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Products;
