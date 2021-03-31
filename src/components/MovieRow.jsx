import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import MyModal from "./MyModal";
import "./MovieRow.css";

class MovieRow extends React.Component {
  state = {
    movies: [],
    isLoading: false,
    modalShow: false,
    selected: null,
    image: null,
    title: null,
    year: null,
    type: null,
  };

  fetchData = async () => {
    let query = this.props.searchQuery;
    this.setState({ isLoading: true });
    try {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${key}`
      );

      const data = await response.json();
      if (data.Response === "True") {
        const array = data.Search;
        this.setState({ movies: array });
        console.log(this.state.movies);
      } else {
        console.log("error happened");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    await this.fetchData();
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      await this.fetchData();
    }
  };
  render() {
    return (
      <div className="mb-5">
        <Splide
          options={{
            rewind: true,
            autoplay: true,
            interval: 500,
            perPage: 8,
            gap: "1em",
            pagination: false,
            drag: true,
            focus: 0,
            perMove: 1,
            breakpoints: {
              1583: {
                perPage: 6,
              },
              1483: {
                perPage: 6,
              },
              1020: {
                perPage: 4,
              },
              750: {
                perPage: 3,
              },

              514: {
                perPage: 2,
              },
              350: {
                perPage: 1,
              },
            },
          }}
          className="text-center"
        >
          {this.state.movies.map((movie) => (
            <SplideSlide className="mb-3" key={movie.imdbID}>
              <img
                class="images"
                height="300"
                width="250"
                src={movie.Poster}
                id={movie.imdbID}
                alt={movie.imdbID}
                onClick={() =>
                  this.setState({
                    modalShow: true,
                    selected: movie.imdbID,
                    image: movie.Poster,
                    title: movie.Title,
                    year: movie.Year,
                    type: movie.Type,
                  })
                }
              />
            </SplideSlide>
          ))}
          <MyModal
            type={this.state.type}
            year={this.state.year}
            title={this.state.title}
            image={this.state.image}
            selected={this.state.selected}
            show={this.state.modalShow}
            onHide={() => this.setState({ modalShow: false })}
          />
        </Splide>
      </div>
    );
  }
}

export default MovieRow;
