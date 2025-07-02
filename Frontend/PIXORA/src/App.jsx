import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Buy from './pages/Buy'
import Landingpage from './pages/Landingpage'
import Result from './pages/Result'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Generate from './pages/Generate'
import Navbar from './components/navbar'
import Footer from './components/footer'

const App = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}

export default App