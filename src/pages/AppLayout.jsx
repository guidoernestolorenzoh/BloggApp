import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main className="flex-1 min-w-0 overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
              <Outlet />
            </div>
            <Footer />
          </main>
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
