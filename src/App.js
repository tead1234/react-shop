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
import { useState } from 'react';
import data from './data'
import{Routes, Route, Link} from 'react-router-dom'
function App() {
  let[watch, setwatch] = useState(data)
  return (
    <>
    <div className="App">
        <ColorSchemesExample/>
        <MainBg></MainBg>
        <ResponsiveAutoExample watch = {watch}></ResponsiveAutoExample>
    </div>
    {/* 각 버튼별 페이지생성 */}
    <Routes>
      <Route path='/'></Route>  
      <Route path='/price'></Route>  
      <Route path = '/features' element={FeaturesPage}></Route>  
    </Routes> 
    <Link to="/features">버튼</Link>   
    </>
    
  );
}
function MainBg(){
  return(
    <>
        <img src={watchimg} style={{width: "100%",height: "300px", width: "100%", backgroundSize: "cover", backgroundPosition: "center" } }></img>
    </>
  )
}
function FeaturesPage(){
  return(
    <>
      <p>hi</p>
      <MainBg></MainBg>
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features" >Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
function ResponsiveAutoExample(props) {
  return (
    <Container>
      <Row>
        {/* map에선 ()만 쓰임 */}
        {
          props.watch.map((a, i)=>(
          <Col sm>
          <p>{a.title}</p>
          <p>{a.content}</p>
          <p>{a.price}</p>
          <img src={logo}></img>
          </Col>
          ))
        }
        
      </Row>
    </Container>
  );
}
export default App;
