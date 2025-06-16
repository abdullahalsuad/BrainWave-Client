import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const AuthPage = () => {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default AuthPage;
