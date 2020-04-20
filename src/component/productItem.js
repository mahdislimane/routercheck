import React from "react";

export default function ProductItem(props) {
  let productItem = props.productData.filter(
    (product) => product.id == props.match.params.productId
  )[0];
  return (
    <div>
      <h1> {productItem.name} </h1>
      <p> {productItem.description} </p>
      <hr />
      <h4> {productItem.status} </h4>
    </div>
  );
}
