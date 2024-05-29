import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContactProvider } from '../contexts/ContactContext'
import App from './App'
import '../styles/index.css'
import SlideBar from '../components/SlideBar'
import AllContact from '../pages/AllContact'
import AddContacts from '../pages/AddContacts'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <ContactProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            {/* <Route index element={<SlideBar />} /> */}
            <Route index element={<AllContact />} />
            <Route path='add-contact' element={<AddContacts />} />

          </Route>
        </Routes>
      </Router>
    </ContactProvider>
    </>
)
