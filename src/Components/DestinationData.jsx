import './DestinationStyle.css'
function DestinationData(props)
{
  return (
    <>
       <div className={`${props.wrapper} ${props.direction}`}>
          <div className={props.descClass}>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
          </div>
          <div className={props.imgClass}>
            <img src={props.srcImg1} alt='dal lake'/>
            <img src={props.srcImg2} alt='dal lake'/>
          </div>
        </div> 
    </>
  )
}
export default DestinationData;
