import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import KegControl from "./KegControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (query) => {
    this.setState({
      query: query,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header search={this.handleSearch} />
        <Container>
          <KegControl query={this.state.query} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
