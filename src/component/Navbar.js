import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Link to="routercheck/">
            <Button>Home</Button>
          </Link>
          <Link to="routercheck/category">
            <Button>Category</Button>
          </Link>
          <Link to="routercheck/products">
            <Button>Products</Button>
          </Link>
          <Link to="routercheck/login">
            <Button>Login</Button>
          </Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  );
}
