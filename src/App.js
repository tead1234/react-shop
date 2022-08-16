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
import { useEffect, useState } from 'react';
import data from './data'
import Pricepage from './Pricepage.js'
import FeaturesPage from './featurespage.js'
import CartPage from './cart.js';
import{Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
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
                  <MainBg tap={tap} settap = {settap}></MainBg>
                  <ResponsiveAutoExample watch = {watch} setwatch={setwatch}
                  cnt = {cnt} setcnt={setcnt} url = {url} Swit = {Swit} setSwit ={setSwit}
                  >
                  </ResponsiveAutoExample></div>} />
      <Route path = '/features' element={<><ColorSchemesExample/><FeaturesPage watch={watch}></FeaturesPage></>}/> 
      <Route path = "/cart" element={<CartPage></CartPage>}></Route>
      {/* props전송은 js 파일을 넘어서도 가능 */}
      <Route path='/pricing' element={<><ColorSchemesExample></ColorSchemesExample><Pricepage watch={watch} ></Pricepage></>}> 
      {/* 라우트 안에 세부 경로를 만들수 있음 이때 /쓰지 않음 자동으로 생성   */}
      {/* 이떄 부모페이지를 컴포넌트화 시킨다음 아울렛을 써줘야함 */}
        <Route path="0" element={<>150000000(vat별도).</>}></Route>
        <Route path="1" element={<>80000000(vat별도).</>}></Route>
        <Route path="2" element={<>100000000(vat별도).</>}></Route>
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
          <ChangeTab tap = {props.tap}></ChangeTab>
    </>
  )
}
// 일반 조건문을 쓰고 싶다면 별도의 함수로 만들어서 사용
// props로 전달된 애를 또 props로 전달이 된다??
function ChangeTab(props) {
  let[option, setOption] = useState('');
  useEffect(()=>{
    setTimeout(()=>{
     setOption('end');
    }, 100
    )
    // cleanup fun
    return()=>{
        setOption('');
      }
  },[props.tap])
  if (props.tap == 0){
    return (<div className={`start ${option}`}>하이염</div>)  
  } else if (props.tap ==1){
    return (<div className={`start ${option}`}>바이염</div>)
  }else{
   return (<div className={`start ${option}`}>내용2</div>)
 } 
}

function ColorSchemesExample() {
  const StyledLink = styled(Link)`
                  color: Azure;
                  text-decoration: none;
                  padding : 10px;
  `;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WatchLounge</Navbar.Brand>
          <Nav className="me-auto">
            {/* 근본적으로 여기서 새로고침이 된다 야발 */}
            <StyledLink to="/features" >Features</StyledLink>
            <StyledLink to="/pricing">Pricing</StyledLink>
            <StyledLink to="/cart">Cart</StyledLink>
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
