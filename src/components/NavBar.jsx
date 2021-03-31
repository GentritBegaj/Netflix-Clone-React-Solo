import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <Navbar bg="dark" expand="lg" className="bg-transparent pr-5">
          <Navbar.Brand className="bg-transparent">
            <img src="logo.svg" alt="logo" width="160px" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-light">Home</Nav.Link>
              <Nav.Link className="text-light">Series</Nav.Link>
              <Nav.Link className="text-light">Films</Nav.Link>
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
                <div style={{ float: "left" }}>
                  <img
                    src="user.png"
                    alt="user"
                    width="30px"
                    height="30px"
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
        <div id="header-text">
          <p className="text-light ml-1">
            A dying man makes a desperate bid to save his family.
            <br />
            But in the meth trade, there are fates far worse than death
          </p>
          <Button className="btn btn-lg mx-1 play-button">
            <i className="fas fa-play" />
            Play
          </Button>
          <Button className="btn btn-lg btn-info text-light mx-1">
            <i className="fas fa-info-circle" />
            More info
          </Button>
        </div>
      </header>
    );
  }
}

export default NavBar;
