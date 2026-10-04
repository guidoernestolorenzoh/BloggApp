import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import RightBar from "../components/RightBar"


const AppLayout = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
          <p>footer</p>
        </main>
        <RightBar />
      </div>
    </div>      
    </>
  )
}

export default AppLayout