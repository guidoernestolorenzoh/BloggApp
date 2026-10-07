import {Toaster} from 'react-hot-toast'
import {Route, Routes} from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Login from './components/Login'
import Home from './pages/Home/Home'
import Authors from './pages/Authors/Authors'
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import ProtectedRoute from './components/ProtectedRoute'
import Post from './pages/Post/Post'
import PostByTags from './pages/PostByTags/PostByTags'
import PostPage from './pages/PostPage/PostPage'
import { useTheme } from './store/useThemeStore'
import { useEffect } from 'react'


function App() {  
  const { theme } = useTheme();
    
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute('data-theme','dark');
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute('data-theme','light');
    }

    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
          <Route index element={<Home />}/>
          <Route path='/authors' element={<Authors />} />
          <Route path='/about-us' element={<About />} />        
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/posts:id' element={<Post />}/>
          <Route path='/tag/:tagName' element={<PostByTags/>}/>
          <Route element={<ProtectedRoute />}>
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
