import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default class Registration extends Component {
  state = {
    users: [],
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      date: "",
      address: "",
      city: "",
      zip: 1,
    },
    isPassValid: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.userInfo);
    this.setState({
      users: [...this.state.users, this.state.userInfo],
    });
    this.props.history.push("/");
  };

  handleChange = (e) => {
    let id = e.target.id;
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [id]: e.target.value,
      },
    });
  };

  validatePassword = (password) => {
    let regEx = /^[A-Za-z]\w{7,14}$/;
    if (password.match(regEx)) {
      this.setState({ isPassValid: true });
    } else {
      this.setState({ isPassValid: false });
    }
    console.log(this.state.isPassValid);
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <Container
          className="p-5"
          style={{ marginTop: "30px", maxWidth: "80vw", margin: "0 auto" }}
        >
          <Row style={{ margin: "0 auto" }}>
            <Col xs={8} className="mb-5">
              <h2 className="text-white">To register fill the form below:</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label className="text-light">First name</Form.Label>
                    <Form.Control
                      id="firstName"
                      required
                      type="text"
                      placeholder="First name"
                      value={this.state.userInfo.firstName}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      Minimum 2 characters
                    </Form.Text>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Label className="text-light">Last name</Form.Label>
                    <Form.Control
                      id="lastName"
                      required
                      type="text"
                      placeholder="Last name"
                      value={this.state.userInfo.lastName}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      Minimum 3 characters
                    </Form.Text>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label className="text-light">
                      Email address
                    </Form.Label>
                    <Form.Control
                      id="email"
                      required
                      type="email"
                      placeholder="Enter email"
                      value={this.state.userInfo.email}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      id="password"
                      required
                      type="password"
                      placeholder="Password"
                      value={this.state.userInfo.password}
                      onKeyUp={(e) => this.validatePassword(e.target.value)}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      Minimum 8 chars, 1 digit, 1 letter
                    </Form.Text>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-light">
                      Date of Birth
                    </Form.Label>
                    <Form.Control
                      id="date"
                      required
                      type="date"
                      value={this.state.userInfo.date}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-light">Address</Form.Label>
                    <Form.Control
                      id="address"
                      type="text"
                      placeholder="Enter Address..."
                      required
                      value={this.state.userInfo.address}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md={6}>
                    <Form.Label className="text-light">City</Form.Label>
                    <Form.Control
                      id="city"
                      type="text"
                      placeholder="Enter City..."
                      required
                      value={this.state.userInfo.city}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="3">
                    <Form.Label className="text-light">Zip</Form.Label>
                    <Form.Control
                      id="zip"
                      type="number"
                      placeholder="Zip"
                      required
                      value={this.state.userInfo.zip}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      Please provide a valid zip.
                    </Form.Text>
                  </Form.Group>
                </Form.Row>
                {this.state.userInfo.firstName?.length > 1 &&
                  this.state.userInfo.lastName?.length > 2 &&
                  this.state.userInfo.date !== "" &&
                  this.state.userInfo.zip?.length === 5 &&
                  this.state.isPassValid && (
                    <Button type="submit">Submit</Button>
                  )}
              </Form>
              );
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
