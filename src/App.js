import './App.css';
import './FeaturesPage.css'
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
import pricepage from './pricepage'
import{Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom'
function App() {
  let[watch, setwatch] = useState(data)
  let [imgSrc] = useState(['/datejust.png','/submariner.png','/moonwatch.png'])
  return (
    <>
    {/* <Link to="/features">버튼</Link>    */}
    
    {/* 각 버튼별 페이지생성 */}
    <Routes>
      <Route path = '/features' element={<><ColorSchemesExample/><FeaturesPage></FeaturesPage></>}/>  
      <Route path='/' element={<div className="App">
                  <ColorSchemesExample/>
                  <MainBg></MainBg>
                  <ResponsiveAutoExample watch = {watch} imgSrc = {imgSrc}>
                  </ResponsiveAutoExample></div>}>
      </Route>  
      <Route path='/pricing' element={<pricepage></pricepage> }>
      {/* 라우트 안에 세부 경로를 만들수 있음 이때 /쓰지 않음 자동으로 생성   */}
      {/* 이떄 부모페이지를 컴포넌트화 시킨다음 아울렛을 써줘야함 */}
        <Route path="datejust" element={<>품절됐습니다.</>}></Route>
        <Route path="submariner" element={<>품절됐습니다.</>}></Route>
        <Route path="moonwatch" element={<>86000000원</>}></Route>
      </Route> 
      <Route path='*' element={<>없는 페이지 입니다.</>}></Route> 
    </Routes> 
    </>
    
  );
}
function MainBg(){
  return(
    <>
        <img src={process.env.PUBLIC_URL+'/rolex_main.png'} style={{width: "100%",height: "300px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor:'black' } }></img>
    </>
  )
}
function FeaturesPage(){
  let [imgSrc] = useState(['/datejust.png','/submariner.png','/moonwatch.png'])
  return(
    <>
    <div className='features'>
      <img src={process.env.PUBLIC_URL+imgSrc[0]}></img>
        <h2>롤렉스의 아름다움</h2>
        <h3>DateJust</h3>
        <br></br>
        <img src={process.env.PUBLIC_URL+imgSrc[1]}></img>
        <h2>롤렉스의 시작과 끝</h2>
        <h3>SubMariner</h3>
        <br></br>
        <img src={process.env.PUBLIC_URL+imgSrc[2]}></img>
        <h2>오메가의 역작</h2>
        <h3>MoonWatch</h3>
    </div>
    </>
  )
}

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">BrandLoge</Navbar.Brand>
          <Nav className="me-auto">
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
          <img src={process.env.PUBLIC_URL+props.imgSrc[i]} style={{width: '30%'}}></img>
          <p>{a.title}</p>
          <p>{a.content}</p>
          <p>{a.price}</p>
          </Col>
          ))
        }
        
      </Row>
    </Container>
  );
}
export default App;
