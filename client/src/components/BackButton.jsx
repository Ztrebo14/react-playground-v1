import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

  return (
    <>
        <button onClick={handleBackButton}>Back</button>
    </>
  )
}

export default BackButton