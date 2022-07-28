import './FeaturesPage.css'
function FeaturesPage(props){
    return(
      <>
      {
        props.watch.map((a,i) => (
          <div className='features'>
          <img src={process.env.PUBLIC_URL+a.id+'.png'}></img>
          <h2>{a.feature}</h2>
          <h3>{a.title}</h3>
          <br></br>
          </div>
        ))
    }
      </>
    )
  }
  export default FeaturesPage;