import React from 'react'
import {Link} from 'react-router-dom'
import { menuItems } from './MenuItems'
import './NavBar.css'

export default function NavBar() {
  const [barClick, setBar] = React.useState(true)
  function handleClick() {
    setBar(!barClick)
  }
  return (
    <>
      <nav className="navbarItems">
        <h1 className="navbar-logo">TravelGo</h1>
        <div className="menu-icon" onClick={handleClick}>
          {/*Making toggle the icon so that atonce only one icon present  */}
          <i className={barClick ? 'fa fa-bars' : 'fa fa-times'}></i>
        </div>
        
        <ul className={barClick ? 'navbar-menu' : 'navbar-menu active'}>
          {
            menuItems.map((items, index) => {
              return (
                <li key={index}>
                  <Link to={items.url} className={items.cName}>
                    <i class={items.icon}></i> {items.title}
                  </Link>
                </li>
              );
            })
          }
          <button className='btn-signup'>Sign Up</button>
        </ul>
      </nav>
    </>
  )
}
