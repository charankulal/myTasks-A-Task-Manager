import React from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import '../Styles/Navbar.css'
import $ from 'jquery'
export default function Navbar(props) {
  $('li').click(function(){
    
    
    $(this).addClass('active').siblings().removeClass('active');
    
});
  return (
    <>
    <nav className='nav text-decoration-none'>
        <ul className="nav flex-column">
  <li className="nav-item " style={{width:"140%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/">Home</Link>
  </li>
  <li className="nav-item " style={{width:"140%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/today">Today's Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"140%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/all">All Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"136%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/important">Important Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"129%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/completed">Completed Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"128%"}}>
  <Link className={`nav-link text-decoration-none ${props.isDarkMode ? 'dark-mode' : 'light-mode'}`} to="/incomplete">Incomplete Tasks</Link>
  </li>
</ul>
    </nav>

    </>
  )
}
