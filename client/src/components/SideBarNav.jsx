import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../styles/components/SideBarNav.css'

const SideBarNav = ({ isOpen, toggleSideBar }) => {
  return (
    <>
    <div className="sidebar-and-outlet">
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
            <button className='close-btn' onClick={toggleSideBar} >X</button>
            <h4>Side Bar Navigation</h4>
            <div className="sidebar-links">
              <NavLink to={'/'} >All Contacts</NavLink>
              <NavLink to={'/add-contact'} >Add Contact</NavLink>
            </div>
        </div>
        <div className={`output-route-container ${isOpen ? 'move' : ''}`}>
            <Outlet />
        </div>
        {/* <div className="sqr1">
          <div className="sqr2"></div>
          <div className="sqr2-1"></div>
          <div className="sqr2-2"></div>
        </div> */}
    </div>
    </>
  )
}

export default SideBarNav