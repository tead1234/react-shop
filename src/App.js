import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import watchimg from './img/rolex.jfif'
import logo from './img/logo512.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
        <ColorSchemesExample/>
        <MainBg></MainBg>
        <ResponsiveAutoExample></ResponsiveAutoExample>
    </div>
  );
}
function MainBg(){
  return(
    <>
        <img src={watchimg} style={{width: "100%",height: "300px", width: "100%", backgroundSize: "cover", backgroundPosition: "center" } }></img>
    </>
  )
}
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BrandLoge</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm>
          <p>상품1</p>
          <img src={logo}></img>
        </Col>
        <Col sm>상품2</Col>
        <Col sm>
          <p>상품3</p>
          <img src={logo}></img>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
