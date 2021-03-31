import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";

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
        <NavBar
          searchField={this.state.searchField}
          handleQuery={this.handleQuery}
        />
        <MainBody searchQuery={this.state.searchField} />
        <Footer />
      </div>
    );
  }
}

export default App;
