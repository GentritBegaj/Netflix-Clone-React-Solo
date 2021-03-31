import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <Navbar bg="transparent" expand="lg" className="bg-transparent pr-5">
        <Navbar.Brand className="bg-transparent">
          <img src="logo.svg" alt="logo" width="160px" height="40px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" clas />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className={
                this.props.location.pathname === "/"
                  ? "nav-link text-light"
                  : "nav-link text-muted"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                this.props.location.pathname === "/series"
                  ? "nav-link text-light"
                  : "nav-link text-muted"
              }
              to="/series"
            >
              Series
            </Link>
          </Nav>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            inline
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  this.props.handleQuery(e.target.value);
                }
              }}
            />
          </Form>
          <NavDropdown
            title={
              <div style={{ float: "left", marginBottom: "10px" }}>
                <img
                  src="user.png"
                  alt="user"
                  width="36px"
                  height="36px"
                  className="thumbnail-image"
                />
              </div>
            }
            drop={"down"}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Separated link</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
