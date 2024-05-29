import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const ContactContext = createContext()

export const ContactProvider = ({children}) => {
    const [ users, setUsers ] = useState([])

  return (
    <>
    <ContactContext.Provider value={{ users, setUsers }}>
        {children}
    </ContactContext.Provider>
    </>
  )
}

export default ContactContext
