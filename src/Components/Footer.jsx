import './FooterStyle.css'
export default function footer()
{
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="text">
            <h1>Let's Travel</h1>
            <p>Choose your favourite destination</p>
          </div>
          
          <div className="social-icon">
            <a href="\"><i className='fa-brands fa-instagram-square'/></a>
            <a href="\"><i className='fa-brands fa-facebook-square'/></a>
            <a href="\"><i className='fa-solid fa-envelope-square'/></a>
          </div>
          
        </div>
        <div className='footer-bottom'>
          <div className='col'>
            <h4>Project</h4>
            <a herf='/'>Changelog</a>
            <a herf='/'>Status</a>
            <a herf='/'>License</a>
            <a herf='/'>AllVersion</a>
          </div>
           <div className='col'>
            <h4>Community</h4>
            <a herf='/'>Github</a>
            <a herf='/'>Telegram</a>
            <a herf='/'>Projects</a>
            <a herf='/'>Twitter</a>
          </div>
           <div className='col'>
            <h4>Help</h4>
            <a herf='/'>Support</a>
            <a herf='/'>Trouble Shooting</a>
            <a herf='/'>Contact Us</a>
          </div>
           <div className='col '>
            <h4>Others</h4>
            <a herf='/'>Trems of Service</a>
            <a herf='/'>Policy</a>
            <a herf='/'>License</a>
          </div>
        </div>
      </div>
    </>
  )
}