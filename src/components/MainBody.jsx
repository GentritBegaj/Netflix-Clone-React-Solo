import React from "react";
import MovieRow from "./MovieRow";
import "./MainBody.css";

class MainBody extends React.Component {
  render() {
    return (
      <>
        <MovieRow query={"Spider%20Man"} />
        <MovieRow query={"Harry%20Potter"} />
        <MovieRow query={"Batman"} />
      </>
    );
  }
}

export default MainBody;
