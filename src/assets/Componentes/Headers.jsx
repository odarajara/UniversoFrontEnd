import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Headers extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>Universo Front-end</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:5174/Home#features">
                Home
              </Nav.Link>

              <Nav.Link href="http://localhost:5174/conteudo#features">
                Linguagem Padrão
              </Nav.Link>
              <Nav.Link href="http://localhost:5174/conteudo2#features">
                Linguagem de Programação
              </Nav.Link>
              <Nav.Link href="http://localhost:5174/contato#features">
                Contatos
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      
    );
  }
}

export default Headers;
