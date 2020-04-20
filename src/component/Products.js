import React from "react";
import { Link, Route } from "react-router-dom";
import ProductItem from "./productItem";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products(props) {
  const productData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },
    {
      id: 2,
      name: "Stylised Flip Flops and Slippers",
      description:
        "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
      status: "Out of Stock",
    },
    {
      id: 3,
      name: "ADIDAS Adispree Running Shoes",
      description:
        "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
      status: "Available",
    },
    {
      id: 4,
      name: "ADIDAS Mid Sneakers",
      description:
        "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
      status: "Out of Stock",
    },
  ];
  let linkList = productData.map((el) => {
    return (
      <li>
        <Link to={`${props.match.url}/${el.id}`}> {el.name} </Link>
      </li>
    );
  });
  return (
    <div className="container-fluid row">
      <div className="col-6" style={{ backgroundColor: "beige" }}>
        <h3>Products</h3>
        <ul> {linkList} </ul>
      </div>
      <div className="col-6">
        <Route
          path={`${props.match.path}/:productId`}
          render={(props) => (
            <ProductItem {...props} productData={productData} />
          )}
        />
        <div style={{ textAlign: "center" }}>
          <Route
            exact
            path={`${props.match.path}/`}
            render={(props) => <p>Please select a product.</p>}
          />
        </div>
      </div>
    </div>
  );
}
