import React from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    commentObj: {
      comment: "",
      rate: 3,
      elementId: this.props.selected,
    },
  };
  postComment = async (e) => {
    e.preventDefault();
    console.log(this.state.commentObj);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentObj),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
          },
        }
      );

      if (response.ok) {
        console.log("comment added");
        this.props.fetchComments(this.props.selected);
      } else {
        console.log("Error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleInput = (e) => {
    let id = e.target.id;
    console.log(e.target.value);
    this.setState({
      commentObj: {
        ...this.state.commentObj,
        [id]: e.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.postComment} className="mt-5">
          <Form.Group>
            <Form.Label className="text-light">Add a comment:</Form.Label>
            <Form.Control
              id="comment"
              as="textarea"
              placeholder="Add comment..."
              value={this.state.commentObj.comment}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-light">Rating</Form.Label>
            <Form.Control
              id="rate"
              type="number"
              max={5}
              min={1}
              value={this.state.commentObj.rate}
              onChange={this.handleInput}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
