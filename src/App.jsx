import {Toaster} from 'react-hot-toast'
import {Route, Routes} from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Login from './components/Login'
import Home from './pages/Home/Home'
import Authors from './pages/Authors/Authors'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import ProtectedRoute from './components/ProtectedRoute'


function App() {  

  return (
    <>
      <Toaster position='top-right' toastOptions={{duration: 3000, style: {
        background: "#1B3022", color: "#fff", borderRadius: "12px", fontSize: "14px"
      }}}/>

      <Routes>
        {/* Auth Pages */}        
        <Route path='/login' element={<Login />} />
        {/* Main Pages navbar */}
        <Route path='/' element={<AppLayout />}>
          <Route path='/authors' element={<Authors />} />
          <Route path='/about' element={<About />} />        
          <Route path='/contact-us' element={<ContactUs />} />
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />}/>
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
