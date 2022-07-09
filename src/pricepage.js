import { Link, Outlet, useNavigate } from 'react-router-dom';
import './pricepage.css'
function Pricepage(props){
    const nav = useNavigate();
    return(
        <>
        <div className='pricepage-price'>
            {
                props.imgSrc.map((a,i)=>(
                    <img src={process.env.PUBLIC_URL+ a} 
                        onClick={()=> nav('./datejust') }
                        style={{width:'400px', padding:'10px', paddingTop: "40px", display:'inline'}}></img> 
                    ))        
            }
            <Outlet/> 
        </div>
        </>
        
    );
}
export default Pricepage;