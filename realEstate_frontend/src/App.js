import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home'
import News from './pages/news'
import About from './pages/about'
import Contact from './pages/contact'
import Renting from './pages/renting'
import Selling from './pages/selling'
import Register from './pages/register'
import Login from './pages/login'
import UserInfo from './pages/userInfo'
import Gdpr from './pages/gdpr'
import AddOffer from './pages/add-offer'

function App() {
  if (localStorage.getItem('language') == null)
    localStorage.setItem('language', 'en')
  if (sessionStorage.getItem('loggedInEmail') == null)
    sessionStorage.setItem('loggedInEmail', 'false')

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/news"
            element={<News />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/renting"
            element={<Renting />}
          />
          <Route
            path="/selling"
            element={<Selling />}
          />
          <Route
            path="/add-offer"
            element={sessionStorage.getItem('loggedInEmail') !== 'false' ?
              (sessionStorage.getItem('loggedInRole') === 'agent' ? <AddOffer /> : <Navigate to="/" />)
              :
              <Navigate to="/login" />}
          />
          <Route
            path="/gdpr"
            element={sessionStorage.getItem('loggedInEmail') !== 'false' ? <Gdpr /> : <Navigate to="/login" />}
          />
          <Route
            path="/user-info"
            element={sessionStorage.getItem('loggedInEmail') !== 'false' ? <UserInfo /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/register"
            element={sessionStorage.getItem('loggedInEmail') === 'false' ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={sessionStorage.getItem('loggedInEmail') === 'false' ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App