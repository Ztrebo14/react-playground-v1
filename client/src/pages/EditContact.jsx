import React from 'react'
import { useParams, Link } from 'react-router-dom'
import BackButton from '../components/BackButton'

const EditContact = () => {
  const { userId } = useParams()

  return (
    <>
      <BackButton/>
      <h2>Editing user contact</h2>
      <p>{userId}</p>
        
    </>
  )
}

export default EditContact