import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

class CommentList extends React.Component {
  deleteComment = async (e) => {
    e.preventDefault();
    let id = e.target.id;
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDVjOTA2YTFjZmRmMzAwMTVkNjBhYTciLCJpYXQiOjE2MTY2NzkwMTgsImV4cCI6MTYxNzg4ODYxOH0.gHhKFOEEJvurspQQj4MWPwVXrgdzJrL5yM6Q3P3t7Js",
          },
        }
      );
      if (response.ok) {
        this.props.fetchComments(this.props.selected);
      } else {
        console.log("Error deleting the comment");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <ListGroup>
          {this.props.comments.map((comment) => (
            <div className="mb-3 d-flex">
              <ListGroup.Item>{comment.comment}</ListGroup.Item>

              <Button
                style={{ float: "right" }}
                id={comment._id}
                onClick={this.deleteComment}
              >
                <DeleteForeverOutlinedIcon
                  id={comment._id}
                  onClick={this.deleteComment}
                />
              </Button>
            </div>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CommentList;
