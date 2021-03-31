import React, { Component } from "react";
import TVShowsRow from "./TVShowsRow";

export default class TVShows extends Component {
  render() {
    return (
      <>
        {this.props.searchQuery.length && this.props.searchQuery.length > 0 && (
          <TVShowsRow searchQuery={this.props.searchQuery} />
        )}
        {!this.props.searchQuery && <TVShowsRow searchQuery={"bad"} />}
      </>
    );
  }
}
