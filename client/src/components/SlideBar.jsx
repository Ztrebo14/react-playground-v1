import React, { useState } from 'react'
import SideBarNav from '../components/SideBarNav'

const SlideBar = () => {
    const [ isOpen, setIsOpen ] = useState(true)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <SideBarNav isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </>
  )
}

export default SlideBar