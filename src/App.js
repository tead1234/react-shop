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
  let[cnt, setcnt] = useState(0);
  let[url,seturl] = useState(['https://codingapple1.github.io/shop/data2.json','https://codingapple1.github.io/shop/data3.json'])
  let[Swit, setSwit] = useState(false);
  let[tap, settap] = useState(0);
  return (
    <>
    {/* <Link to="/features">버튼</Link>    */}
    {/* 각 버튼별 페이지생성 */}
    <Routes> 
      <Route path='/' element={<div className="App">
                  <ColorSchemesExample/>
                  <MainBg tab={tap} settap = {settap}></MainBg>
                  <ResponsiveAutoExample watch = {watch} setwatch={setwatch}
                  cnt = {cnt} setcnt={setcnt} url = {url} Swit = {Swit} setSwit ={setSwit}
                  >
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
function MainBg(props){
  return(
    <>
        <img src={process.env.PUBLIC_URL+'/rolex_main.png'} style={{width: "100%",height: "300px", backgroundSize: "cover", backgroundPosition: "center", backgroundColor:'black' } }></img>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{
              console.log("1번 누름");

                props.settap(0)
            }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{
              props.settap(1);
            }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2"  onClick={()=>{
                props.settap(2)
            }}>버튼2</Nav.Link>
           </Nav.Item>
        </Nav>
          <changeTab tap = {props.tap}></changeTab>
    </>
  )
}
// 일반 조건문을 쓰고 싶다면 별도의 함수로 만들어서 사용
function changeTab(props) {
  if (props.tap == 0){
    console.log("1번 누름");
    return (<div>하이염</div>)  
  } else if (props.tap ==1){
    console.log("2번 누름");

    return (<div>바이염</div>)
  }else
   return (<div>내용2</div>)
 } 
function Detail() {

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
        {/* 알림창 */}
        {
          props.Swit?
          <div>
            <h1> 로딩중입니다. </h1>
          </div>:
          null
        }
        {
          props.watch.map((a)=>(
          <Col sm>
          <img src={process.env.PUBLIC_URL+a.id+'.png'} style={{width: '30%'}}></img>
          <p>{a.title}</p>
          <p>{a.content}</p>
          <p>{a.price}</p>
          </Col>
          ))
        }
        <Button onClick= {()=>{
          props.setSwit(!props.Swit);
          axios.get(props.url[props.cnt]).then((data)=>{
            let copy = [...props.watch];
            data.data.map((a)=>(
                copy.push(a)  
            ));
            props.setwatch(copy)
            // 더보기 알림및 추가
            {
              props.cnt <2?
              props.setcnt(props.cnt + 1):
              alert("더이상 보여줄 페이지가 없다.")
            }
            props.setSwit(!props.Swit);
          }).catch(()=>{
            console.log("에러")
            alert("더이상 보여줄거 없음")

          })
        }}>요청하기</Button>
        
      </Row>
    </Container>
  );
}
export default App;
