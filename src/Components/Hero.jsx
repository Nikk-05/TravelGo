 import './HeroStyle.css'
export default function Hero(props){
  return (
  <>
    <div className={props.cName}>
       <img src={props.source} alt="img"/> 
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <a href={props.url} className={props.btnCls}>{props.urlText}</a>
      </div>
    </div>    
  </>
  )
}