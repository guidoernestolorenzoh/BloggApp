import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl px-6 py-8">
              <Outlet />
            </div>
            {/* <footer className="mx-auto w-full max-w-3xl px-6 pb-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Mi App
            </footer> */}
          </main>
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
