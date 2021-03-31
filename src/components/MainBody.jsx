import React from "react";
import MovieRow from "./MovieRow";
import "./MainBody.css";

class MainBody extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.searchQuery && this.props.searchQuery.length > 0 && (
          <MovieRow searchQuery={this.props.searchQuery} />
        )}
        {!this.props.searchQuery && (
          <>
            <MovieRow searchQuery={"Spider%20Man"} />
            <MovieRow searchQuery={"Harry%20Potter"} />
            <MovieRow searchQuery={"Batman"} />
          </>
        )}
      </React.Fragment>
    );
  }
}

export default MainBody;
