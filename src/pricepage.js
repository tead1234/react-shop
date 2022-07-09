import ColorSchemesExample from './App'
function pricepage(props){
    return(
        <>
            <ColorSchemesExample></ColorSchemesExample>
            {
                props.imgSrc.map((a) =>(
                    <img src={process.env.PUBLIC_URL+a}></img>
                    )
                )
            }
        </>

    );
}
export default pricepage;