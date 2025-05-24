import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Buy from './pages/Buy'
import Landingpage from './pages/landingpage'
import Result from './pages/Result'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>


    </div>
  )
}

export default App