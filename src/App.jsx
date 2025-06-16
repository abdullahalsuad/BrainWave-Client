import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  console.log(import.meta.env.DEV);

  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
