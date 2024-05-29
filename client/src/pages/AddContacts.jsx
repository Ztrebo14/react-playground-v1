import React, { useContext, useState } from 'react'
import ContactContext from '../contexts/ContactContext'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'


const AddContacts = () => {
    const { users, setUsers } = useContext(ContactContext)

  return (
    <>
    <h2>Add Contact</h2>
    <Formik
      initialValues={{
        id: uuidv4(),
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string().max(12, 'Must be 12 characters or less')
        .required('Required'),
        email: Yup.string().email('Invalid email address')
        .required('Required'),
        phoneNum: Yup.string().matches(/^\d{11}$/, 'Must be 11 digits')
        .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) =>  (
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setUsers([...users, values])
          
          setSubmitting(false)
        }, 400)
      )}
    >
      <Form>
        <label>First name: </label>
        <Field name='firstName' type='text' />
        <ErrorMessage name='firstName' />
        <br />
        <label>Last name: </label>
        <Field name='lastName' type='text' />
        <ErrorMessage name='lastName' />
        <br />
        <label>Email: </label>
        <Field name='email' type='email' />
        <ErrorMessage name='email' />
        <br />
        <label>Phone number: </label>
        <Field name='phoneNum' type='text' />
        <ErrorMessage name='phoneNum' />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
  )
}

export default AddContacts