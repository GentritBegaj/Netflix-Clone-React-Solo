import React from "react";
import MovieCard from "./MovieCard";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

class MovieRow extends React.Component {
  state = {
    movies: [],
    isLoading: false,
  };

  fetchData = async () => {
    this.setState({ isLoading: true });
    try {
      let key = `b0ba7bdf`;
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=` + this.props?.query
      );
      const data = await response?.json();
      const array = data?.Search;
      this.setState({ movies: array }, () =>
        console.log("carousel", this.state?.movies)
      );
    } catch {}
  };
  componentDidMount = async () => {
    this.fetchData();
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.query !== this.props.query) {
      console.log("main row", await this.fetchData());
    }
  };
  render() {
    return (
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
        {this.state?.movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Splide>
    );
  }
}

export default MovieRow;
