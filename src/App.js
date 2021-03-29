import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

class App extends React.Component {
  state = {
    searchField: "",
  };

  handleQuery = (query) => {
    this.setState({ searchField: query }, () => {
      console.log(query);
      console.log("searchQuery", this.state.searchField);
    });

    console.log(this.state.searchField.length);
  };

  render() {
    return (
      <div>
        <NavBar handleQuery={this.handleQuery} />
        <MainBody searchQuery={this.state.searchField} />
      </div>
    );
  }
}

export default App;
