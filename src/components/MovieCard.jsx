import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import MyModal from "./MyModal";

class MovieCard extends React.Component {
  state = { modalShow: false };
  render() {
    return (
      <>
        <SplideSlide>
          <img
            src={this.props.movie.Poster}
            alt="Image1"
            width="250px"
            height="300px"
            onClick={() => this.setState({ modalShow: true })}
          />
        </SplideSlide>
        <MyModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          movie={this.props.movie}
        />
      </>
    );
  }
}

export default MovieCard;
