
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Card,Button}from "react-bootstrap"

function App() {
  let name="jilani"
 let last="nasri"
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">phone store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">best salair</Nav.Link>
        <NavDropdown title="stor" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
< section class="section">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/to.jpg" />
  <Card.Body>
    <Card.Title>i phone 12 pro</Card.Title>
    <Card.Text>
       prix:2100$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/thre.jpg" />
  <Card.Body>
    <Card.Title>i phone 12</Card.Title>
    <Card.Text>
       prix:3000$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/tow.jpg" />
  <Card.Body>
    <Card.Title>i phone 13 pro</Card.Title>
    <Card.Text>
       prix:4500$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/thre.jpg" />
  <Card.Body>
    <Card.Title>i phone 11 pro</Card.Title>
    <Card.Text>
       prix:2000$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>

</section>
< section class="drive" >

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/to.jpg" />
  <Card.Body>
    <Card.Title>i phone 12 pro</Card.Title>
    <Card.Text>
       prix:2100$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/thre.jpg" />
  <Card.Body>
    <Card.Title>i phone 12</Card.Title>
    <Card.Text>
       prix:3000$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/tow.jpg" />
  <Card.Body>
    <Card.Title>i phone 13 pro</Card.Title>
    <Card.Text>
       prix:4500$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./img/thre.jpg" />
  <Card.Body>
    <Card.Title>i phone 11 pro</Card.Title>
    <Card.Text>
       prix:2000$
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>



</section>

    </div>
  );
}

export default App;
