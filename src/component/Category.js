import React from "react";
import { Link, Route } from "react-router-dom";

export default function Category(props) {
  return (
    <div>
      <Link to={`${props.match.url}/Shoes`}>
        <button>Shoes</button>
      </Link>
      <Link to={`${props.match.url}/Boots`}>
        <button>Boots</button>
      </Link>
      <Link to={`${props.match.url}/Footwear`}>
        <button>Footwear</button>
      </Link>
      <Route
        path={`${props.match.path}/:category`}
        render={(props) => <h3> {props.match.params.category} </h3>}
      />
    </div>
  );
}
