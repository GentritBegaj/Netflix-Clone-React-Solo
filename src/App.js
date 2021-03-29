import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";

class App extends React.Component {
  state = {
    searchQuery: "",
  };

  handleQuery = (query) => {
    this.setState({ searchQuery: query });
    console.log(query);
  };

  render() {
    return (
      <div>
        <NavBar handleQuery={this.handleQuery} />
        <MainBody />
      </div>
    );
  }
}

export default App;
