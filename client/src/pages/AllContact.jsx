import React, { useContext } from 'react'
import '../styles/pages/AllContact.css'
import ContactContext from '../contexts/ContactContext'
import { NavLink, Link } from 'react-router-dom'



const AllContact = () => {

  const { users } = useContext(ContactContext)

  return (
    <>
    <div className="allcontacts-container-page">
      <h2>All Contacts</h2>
      <div className="contacts-card">
        { users.length ? (
          <>
          { users.map((user) => (
              <ul key={user.id}>
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.email}</li>
              <li>{user.phoneNum}</li>
              {/* <button type="button" >Edit</button> */}
              <Link to={`edit-contact/${user.id}`}>Edit</Link>
              <button type="button" >Delete</button>
              </ul>
            )) 
          }
          </>
        ) : (
          <div>
            No contacts
          </div>
        )
      }

      </div>
    </div>
    </>
  )
}

export default AllContact