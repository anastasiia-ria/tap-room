import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import KegControl from "./KegControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <KegControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
