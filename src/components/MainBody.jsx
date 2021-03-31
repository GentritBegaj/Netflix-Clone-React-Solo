import React from "react";
import MovieRow from "./MovieRow";
import "./MainBody.css";
import Header from "./Header";

class MainBody extends React.Component {
  render() {
    console.log("ROUTERPROPS", this.props);
    return (
      <React.Fragment>
        <Header />

        {this.props.searchQuery && this.props.searchQuery.length > 0 && (
          <MovieRow
            title={this.props.searchQuery}
            searchQuery={this.props.searchQuery}
          />
        )}
        {!this.props.searchQuery && (
          <>
            <MovieRow title={"Spiderman"} searchQuery={"Spider%20Man"} />
            <MovieRow title={"Harry Potter"} searchQuery={"Harry%20Potter"} />
            <MovieRow title={"Batman"} searchQuery={"Batman"} />
          </>
        )}
      </React.Fragment>
    );
  }
}

export default MainBody;
