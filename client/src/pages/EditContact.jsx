import React from 'react'
import { useParams, Link } from 'react-router-dom'
import BackButton from '../components/BackButton'

const EditContact = () => {
  const { contactId } = useParams()

  return (
    <>
      <BackButton/>
      <h2>Editing user contact</h2>
      { contactId.user }
    </>
  )
}

export default EditContact