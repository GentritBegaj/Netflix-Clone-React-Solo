import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default class MovieDetails extends Component {
  state = {
    movieId: this.props.match.params.id,
    movieData: {},
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
      } else {
        console.log("Error fetching the comments");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=925b91e7&i=${this.state.movieId}`
    );
    let data = await response.json();
    this.setState({ movieData: data });
    this.fetchComments(this.state.movieId);
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.movieId !== this.state.movieId) {
      this.fetchComments(this.state.movieId);
    }
  };
  render() {
    return (
      <>
        <Container
          style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
        >
          <Row className="my-5">
            <Col xs={6}>
              <img
                src={this.state.movieData.Poster}
                width="100%"
                style={{ maxHeight: "300px", objectFit: "contain" }}
                alt="image1"
              />
            </Col>
            <Col xs={6}>
              <p className="text-light text-center">
                {this.state.movieData.Plot}
              </p>
              <div className="d-flex justify-content-between">
                <p className="text-light text-center">
                  {this.state.movieData.Type}
                </p>
                <p className="text-light text-center">
                  {this.state.movieData.Year}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center">
            <Col xs={12} md={5} className="mt-5">
              <CommentList
                fetchComments={this.fetchComments}
                selected={this.state.movieId}
                comments={this.state.comments}
              />
            </Col>
            <Col xs={12} md={5}>
              <AddComment
                selected={this.state.movieId}
                fetchComments={this.fetchComments}
                comments={this.state.comments}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
