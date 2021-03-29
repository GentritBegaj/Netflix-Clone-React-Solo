import React from "react";
import MovieRow from "./MovieRow";
import "./MainBody.css";

class MainBody extends React.Component {
  componentDidUpdate = (prevProps, prevstate) => {
    if (prevProps.searchQuery !== this.props.searchQuery)
      console.log("updaTED main body:", this.props.searchQuery);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.searchQuery?.length > 0 ? (
          <MovieRow query={this.props.searchQuery} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default MainBody;
