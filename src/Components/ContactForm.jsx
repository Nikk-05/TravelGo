import './FormStyle.css'
const Form =()=>{
  return (
    <>
      <div className='form-container'>
        <h1>Send a message to us:)</h1>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="text" placeholder="Subject"></input>
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  )
}
export default Form;