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
import Pricepage from './pricepage.js'
import FeaturesPage from './featurespage.js'
import{Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
function App() {
  let[watch, setwatch] = useState(data)
  return (
    <>
    {/* <Link to="/features">버튼</Link>    */}
    {/* 각 버튼별 페이지생성 */}
    <Routes> 
      <Route path='/' element={<div className="App">
                  <ColorSchemesExample/>
                  <MainBg></MainBg>
                  <ResponsiveAutoExample watch = {watch} setwatch={setwatch}>
                  </ResponsiveAutoExample></div>} />
      <Route path = '/features' element={<><ColorSchemesExample/><FeaturesPage watch={watch}></FeaturesPage></>}/> 
      {/* props전송은 js 파일을 넘어서도 가능 */}
      <Route path='/pricing' element={<><ColorSchemesExample></ColorSchemesExample><Pricepage watch={watch} ></Pricepage></>}> 
      {/* 라우트 안에 세부 경로를 만들수 있음 이때 /쓰지 않음 자동으로 생성   */}
      {/* 이떄 부모페이지를 컴포넌트화 시킨다음 아울렛을 써줘야함 */}
        <Route path="/pricing/:id" element={<>150000000(vat별도).</>}></Route>
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

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WatchLounge</Navbar.Brand>
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
          <img src={process.env.PUBLIC_URL+a.id+'.png'} style={{width: '30%'}}></img>
          <p>{a.title}</p>
          <p>{a.content}</p>
          <p>{a.price}</p>
          </Col>
          ))
        }
        <Button onClick= {()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json').then((data)=>{
            let copy = [...props.watch];
            data.data.map((a)=>(
                copy.push(a)  
            ));
            props.setwatch(copy)
          }).catch(()=>{
            console.log("에러")
          })
        }}>요청하기</Button>
        
      </Row>
    </Container>
  );
}
export default App;
