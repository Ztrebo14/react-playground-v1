import React, { useState } from 'react'
import SideBarNav from '../components/SideBarNav'
import '../styles/components/SideBarNav.css'

const Homepage = () => {
    const [ isOpen ,setIsOpen ] = useState(true)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
        <SideBarNav isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </>
  )
}

export default Homepage