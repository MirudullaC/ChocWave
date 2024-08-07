// import React from "react";
// import { Card, Button } from "react-bootstrap";
// // import "../Css/ProductCard.css";

// function Productcard({ imageSrc, altText, name, price, discount }) {
//   return (
//     <div>
//       <Card className="mb-4">
//         <Card.Img
//           variant="top"
//           src={imageSrc}
//           alt={altText}
//           className="card-image"
//         />
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>
//             Price: ${price} <br />
//             Discount: {discount}
//           </Card.Text>
//           <Button variant="primary">Add to Cart</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Productcard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../Css/ProductCard.css";

function ProductCard({ imageSrc, altText, name, price, discount, rating }) {
  return (
    <div className="product-card">
      <Card className="mb-4 card">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={altText}
          className="card-image"
        />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text>
            <div className="price-discount">
              <span className="price">Rs.{price}</span> <br />
              <span className="discount">-{discount}</span>
            </div>
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
