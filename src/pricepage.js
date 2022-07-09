import { Link, Outlet, useNavigate } from 'react-router-dom';
import './pricepage.css'
function Pricepage(props){
    return(
        <>
        <div className='pricepage-price'>
            {
                props.imgSrc.map((a,i)=>(
                    <img src={process.env.PUBLIC_URL+ a} 
                        onClick={()=> <Link to='./pricing/datejust'></Link> }
                        style={{width:'400px', padding:'10px', paddingTop: "40px", display:'inline'}}></img> 
                    ))         
            }
        </div>
        </>
        
    );
}
export default Pricepage;