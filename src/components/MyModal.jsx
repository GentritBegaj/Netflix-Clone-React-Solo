import React from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import "./MyModal.css";

class MyModal extends React.Component {
  state = {
    comments: [],
  };
  fetchComments = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVkOWJlNWI5MTNkOTAwMTU5MzA0OTUiLCJpYXQiOjE2MTY3NDc0OTMsImV4cCI6MTYxNzk1NzA5M30.dGRBTOELc_zweYJ_BjZDDPESsE7wln6nsqVSdprlxDg",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        let commentsArray = [];

        data.map((item) => commentsArray.push(item));

        this.setState({ comments: commentsArray });
        console.log("comentsssssssssssss", commentsArray);
      } else {
        console.log("Error fetching the comments");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchComments(this.props.selected);
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.selected !== this.props.selected) {
      this.fetchComments(this.props.selected);
    }
  };
  render() {
    console.log(this.props);
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header className="ModalWrapper" closeButton>
          <Modal.Title
            className="ModalWrapper"
            id="contained-modal-title-vcenter"
          >
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid ModalWrapper">
          <Container>
            <Row>
              <Col className="text-center" xs={12}>
                <img
                  src={this.props.image}
                  width="350px"
                  height="250px"
                  alt="image1"
                ></img>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <CommentList
                  className="mt-5"
                  fetchComments={this.fetchComments}
                  selected={this.props.selected}
                  comments={this.state.comments}
                />
              </Col>
              <Col xs={12} md={6}>
                <AddComment
                  selected={this.props.selected}
                  fetchComments={this.fetchComments}
                  className="mt-5"
                  comments={this.state.comments}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="ModalWrapper">
          <Button onClick={() => this.props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyModal;
