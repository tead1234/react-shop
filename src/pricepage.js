import './pricepage.css'
function Pricepage(props){
    return(
        <>
            <div className='pricepage-price'>
            {
                props.imgSrc.map((a,i)=>(
                    <img src={process.env.PUBLIC_URL+ a} style={{width:'400px', padding:'10px', paddingTop: "40px", display:'inline'}}></img> 
                ))
            }
                <aside style={{}}>
                    <h1>품절됐습니다.</h1>
                </aside>
            </div>
            
        </>
        
    );
}
export default Pricepage;