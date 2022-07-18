import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './pricepage.css'
function Pricepage(props){
    let [alert, setalert] = useState(true);
    let [inputAlert, setinputAlert] = useState(false);
    let [inputValue, setinputValue] = useState('')
    const inputalert = (event)=>{
        setinputValue(event.target.value);
        console.log(event.target.value)
    }
    const nav = useNavigate();
    const changeData = () => {
        let copy = [...props.watch]
        copy.sort()
        props.watch.setwatch(copy)
    }
    

   
    // 컴포넌트의 주기 중 mount, update시 실행
    // html랜더링 이후 useEffect가 이어서 작동됨
    // 시간이 걸리는 연산, 데이터 가져오기 타이머
    // 실행조건을 넣는 곳 []
    // 마운트 시에만 작동시키고 싶으면 []만 넣으면 ㅇㅋ
    // 숙제 input창에 숫자말고 이상한거 들어오면 알럿
    useEffect(()=>{
        let timer = ()=>{ setTimeout(()=>{
            setalert(false)
        }, 2000)
        }
        timer();
        return () =>{
            // unmount시랑 update만 작동됨
            clearTimeout(timer);
        }
    },[])
    // 일종의 스위치로 만들어야됨
    useEffect(()=>{
       isNaN(inputValue)? setinputAlert(true) : setinputAlert(false)
       console.log(inputAlert)
    }, [inputValue])
    // return clean up 함수 == > 재랜더링이 계속되니깐 기존 코드 정리용 함수
    
    return(
        <>
        {
            alert == true?
        <header className='container'>
            <div className='alert alert-warning'>
                2초이내 구매시 할인
            </div>
        </header> : null
        }
        {
            inputAlert == true?
            <header className='container'>
                <div className='alert alert-warning'>
                    이상한거 넣지 말것
                </div>
            </header> : null
         }
         <input onChange ={inputalert}></input>
            <button onClick={changeData}>가격별 정렬</button>
            {
                    props.watch.map((a,i)=>(
                    <div className='pricepage-card'>
                        <div id='imgbox'>
                            <img  src={process.env.PUBLIC_URL+ a.id+'.png'} 
                            onClick={()=> nav("/pricing/"+a.id) }
                            style={{width:'400px', padding:'10px', paddingTop: "40px", display:'inline'}}></img> 
                        </div>
                        <div className='pricepage-info'>
                            <h2>가격 확인</h2>
                            <Outlet></Outlet>
                        </div>        
                    </div>
                    )) 
            }
            
        </>
        
    );
}
export default Pricepage;