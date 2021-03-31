import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import TVShows from "./components/TVShows";

class App extends React.Component {
  state = {
    searchField: "",
  };

  handleQuery = (query) => {
    this.setState({ searchField: query });
    console.log(this.state.searchField);
  };

  render() {
    return (
      <div>
        <Router>
          <Route
            path="/"
            render={(routerProps) => (
              <NavBar
                searchField={this.state.searchField}
                handleQuery={this.handleQuery}
                {...routerProps}
              />
            )}
          />

          <Route
            path="/"
            exact
            render={(routerProps) => (
              <MainBody {...routerProps} searchQuery={this.state.searchField} />
            )}
          />
          <Route
            path="/series"
            exact
            render={(routerProps) => (
              <TVShows {...routerProps} searchQuery={this.state.searchField} />
            )}
          />
          <Route
            path="/details/:id"
            render={(routerProps) => <MovieDetails {...routerProps} />}
          />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
