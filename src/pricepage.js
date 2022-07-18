import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './pricepage.css'
function Pricepage(props){
    let [alert, setalert] = useState(true);
    const nav = useNavigate();

    const changeData = () => {
        let copy = [...props.watch]
        copy.sort()
        props.watch.setwatch(copy)
    }
    let timer = ()=>{ setTimeout(()=>{
        setalert(false)
    }, 2000)

    }
    // 컴포넌트의 주기 중 mount, update시 실행
    // html랜더링 이후 useEffect가 이어서 작동됨
    // 시간이 걸리는 연산, 데이터 가져오기 타이머
    useEffect(()=>{
        timer()
    })
   
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