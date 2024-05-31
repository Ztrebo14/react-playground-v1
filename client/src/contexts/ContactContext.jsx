import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const ContactContext = createContext()

export const ContactProvider = ({children}) => {
    const [ users, setUsers ] = useState([])
    const [ error, setError ] = useState('')

    // useEffect(() => {
    //   const fetchUserApi = async () => {
    //     try {
    //       const response = await axios.get(`http://localhost:3000/users`)
    //       const userApi = response.data
    //       setUsers(userApi)
    //     } catch (error) {
    //       setError(`Error fetching data: ${error}`, error)
    //     }
    //   }
    //   fetchUserApi()
    // }, [])

  return (
    <>
    <ContactContext.Provider value={{ users, setUsers, error }}>
        {children}
    </ContactContext.Provider>
    </>
  )
}

export default ContactContext
