import { Link, Outlet, useNavigate } from 'react-router-dom';
import './pricepage.css'
function Pricepage(props){
    const nav = useNavigate();

    const changeData = () => {
        let copy = [...props.watch]
        copy.sort()
        props.watch.setwatch(copy)
    }


    return(
        <>
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