import './TripStyle.css'
export default function TripData(props)
{
  return(
    <>
      <div className="t-card">
        <div className='card-img'>
          <img src={props.img}></img>
        </div>
          <h3>{props.heading}</h3>
          <p>{props.content}</p>
      </div>
    </>
  )
}